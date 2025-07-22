import express from 'express';
import cors from 'cors';

import all from './all.js';
import add from './add.js';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use('/all', all);
app.use('/add', add);

app.listen(port, () => {
  console.log('I am listening to', port);
});