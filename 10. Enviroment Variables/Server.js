import express from 'express';
import dotenv from 'dotenv';

const app=express();

dotenv.config();
//config is function inside dotenv it selects the variables and stores into process.env

const port=process.env.PORT; //so here we select process.env.that variable like PORT we created in.env


app.get('/',(req,res)=>
{
    console.log('HI');
})


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});