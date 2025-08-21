import { name } from 'ejs';
import express from 'express';
import session from 'express-session';
const app=express();

app.set('view engine','ejs');
app.use(express.urlencoded({ extended: true }));
app.use(session(
    {
        secret:'my_session_secret',
        resave:true,
        saveUninitialized:false,
        name:'aliraza',
    }
));
app.get('/',(req,res)=>
{
    res.render('home');
})

app.get('/login',(req,res)=>
{
    res.render('login',{error:null});
})

app.post('/login',(req,res)=>
{
    if(req.body.username==='john'&&req.body.password==='123')
    {
        //Create session and store user logged details
        req.session.user={id:1,username:'john',name:'John-Doe'}
        res.redirect('/');
   
    }
    else
    {
        res.render('login',{error:'Wrong credentials'});
    }
})

app.listen(3000,()=>
{
    console.log('Server Listenting to port 3000');
})