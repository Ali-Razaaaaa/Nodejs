const http = require('http');
const fs = require('fs');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
  if (req.method === 'POST')
  {
    let body = '';

    req.on('data', chunk =>
    {
      body += chunk.toString();
    });

    req.on('end', () => {

      const parsedData = querystring.parse(body);
      const name = parsedData.name;
      const message = parsedData.message;

      const content = `Name: ${name}\nMessage: ${message}\n`;

      // Write to message.txt
      fs.writeFile('message.txt', content, err => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Error saving the message.');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/plain' });
          res.end('Message saved successfully!');
        }
      });
    });


  } else {
    // For non-POST requests
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
  }
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
