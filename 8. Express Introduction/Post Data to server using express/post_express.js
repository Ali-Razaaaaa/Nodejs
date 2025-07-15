import express from 'express';
import cors from 'cors';

const app=express();

app.use(cors());
app.use(express.json()); 

app.post('/post',(req,res)=>
{
    const {name,message}=req.body;
    
    res.json({status:'Message Saved Successfully'});
});


const port=3000;

app.listen(port,()=>
{
    console.log(`Server running at http://localhost:${port}`);
})