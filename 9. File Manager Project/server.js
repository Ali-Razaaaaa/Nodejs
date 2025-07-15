server.js
// server.js
import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json()); // for parsing application/json

// CREATE - POST
app.post('/create', (req, res) => {
  const { filename, content } = req.body;
  const filepath = path.join(__dirname, filename);
  
  fs.writeFile(filepath, content, (err) => {
    if (err) return res.status(500).json({ status: 'Error creating file.' });
    res.json({ status: `File '${filename}' created.` });
  });
});

// READ - GET
app.get('/read/:filename', (req, res) => {
  const filename = req.params.filename;
  const filepath = path.join(__dirname, filename);

  fs.readFile(filepath, 'utf-8', (err, data) => {
    if (err) return res.status(404).json({ status: 'File not found.' });
    res.json({ status: `File '${filename}' read successfully.`, content: data });
  });
});

// UPDATE - PUT
app.put('/update/:filename', (req, res) => {
  const filename = req.params.filename;
  const { newContent } = req.body;
  const filepath = path.join(__dirname, filename);

  fs.writeFile(filepath, newContent, (err) => {
    if (err) return res.status(500).json({ status: 'Error updating file.' });
    res.json({ status: `File '${filename}' updated.` });
  });
});

// DELETE - DELETE
app.delete('/delete/:filename', (req, res) => {
  const filename = req.params.filename;
  const filepath = path.join(__dirname, filename);

  fs.unlink(filepath, (err) => {
    if (err) return res.status(404).json({ status: 'File not found or could not be deleted.' });
    res.json({ status: `File '${filename}' deleted.` });
  });
});

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
