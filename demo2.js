const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
  if (req.url === '/process' && req.method === 'POST') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });
    req.on('end', () => {
      console.log(body);
    });
    res.end('okay=> ' + body);
  }
});
server.listen(3000, () => {
  console.log('listening on 3000');
});
