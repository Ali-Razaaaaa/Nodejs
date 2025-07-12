import express from 'express';
import cors from 'cors';

const app=express();
app.use(cors());
app.get('/get',(req,res)=>
{
    res.json({name:"Ali Raza Bugti",Age:"20"});
});
const port=3000;
app.listen(port,()=>
{
    console.log("Sun Rha hon",port);
})