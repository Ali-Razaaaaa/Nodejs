import express from 'express';

const port = 3000;
const app = express();

app.get('/profile/:name', (req, res) => {
  res.send(`<h1>${req.params.name}</h1>`);
});

app.listen(port, () => {
  console.log(`Hi I am actively listening at: ${port}`);
});
