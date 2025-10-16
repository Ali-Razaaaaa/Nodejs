import express from 'express';


const app=express();

app.get('/Users',(req,res)=>
{
    res.send('Users');
})

app.get('/Admins', (req, res, next) => {
  const condition = false;

  if (condition) {
    res.send('Admins Data');
  } else {
    const error = new Error('Admins not found!');
    next(error);
  }
});
// Global Error Handling Midlware
app.use((error,req,res,next)=>
{
    res.status(error.status||500).send('Server Error');
})

app.listen(3000,()=>
{
    console.log("Server Listenting to 3000");
})