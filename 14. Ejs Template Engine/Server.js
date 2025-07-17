const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const name = 'Ali';  
  res.render('index', { name });  
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
