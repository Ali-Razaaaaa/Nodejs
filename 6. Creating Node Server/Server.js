const http=require('http');
const server=http.createServer((req,res)=>
{
    if(req.url==='/')
    {
        res.write('Home Page');
        res.end();
    }
    if(req.url==='/projects')
    {
        res.write('Projects Page');
        res.end();
    }
    if(req.url==='/contact')
    {
        res.setHeader('Content-Type','text/html'); // tells frontend that what data it should expect...
        res.write('<h1>Any Project you want to work with?</h1>');
        res.end();
    }
});

const port=3000;

server.listen(port,()=>
{
    console.log('Listening on port',port);
});