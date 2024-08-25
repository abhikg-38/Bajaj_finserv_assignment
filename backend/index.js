const express= require('express');
const bodyParser=require('body-parser');

const app=express();
app.use(bodyParser.json());

const port=process.env.PORT|| 3000;
app.post('/bfhl', (req,res)=> {
    try{
        const {data}=req.body;
        if(!Array.isArray(data)){
            return res.status(400).json({
                is_success: false,
                message:"Data should be an array, invalid"
            });
        }
        const numbers=data.filter(item=> !isNaN(item));
        const alphabets=data.filter(item=> /^[a-zA-Z]$/.test(item));
        const lowercaseAlphabets=alphabets.filter(item =>/^[a-z]$/.test(item));
        const highestLowercaseAlphabet = lowercaseAlphabets.sort().pop()||null;

        const response={
            is_success: true,
            user_id:"abhik_goswami_07042003",
            email:"abhik.g704@gmail.com",
            roll_number:"21BCE0626",
            numbers,
            alphabets,
            highes_lowercase_alphabet:highestLowercaseAlphabet? [highestLowercaseAlphabet]: []
        };
        return res.status(200).json(response);
    }
    catch(error){
        return res.status(500).json({
            is_success: false,
            message: "Error"
        });
    }
});

app.get('/bfhl',(req,res)=>{
    res.status(200).json({
        operation_code:1
    });
});

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
});