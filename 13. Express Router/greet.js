import express from 'express';

const router=express.Router();

export default router.get('/:name',(req,res)=>
{
    const name=req.params.name;

    res.send(`Hello, ${name}!`);
});
