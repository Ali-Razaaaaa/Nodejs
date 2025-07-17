import express from 'express';
const app = express();
import hello from './hello.js';
import greet from './greet.js';

const hellorouter=hello;
const greetrouter=greet;

app.use('/api/hello', hellorouter);
app.use('/api/greet', greetrouter);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
