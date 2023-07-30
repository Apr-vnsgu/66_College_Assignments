const http = require('http');
const fs = require('fs');
http
  .createServer((req, res) => {
    if (req.method === 'GET') {
      if (req.url === '/') {
        res.end('Home Page');
      }
      if (req.url === '/greethello') {
        fs.readFile('./q2(1).html', (err, data) => {
          if (err) {
            return res.send('Something went wrong!!');
          } else {
            res.writeHead(200, {
              'Content-Type': 'text/html',
            });
            res.write(data);
            return res.end();
          }
        });
      }
      if (req.url === '/asynccall') {
        fs.readFile('./q2(2).html', (err, data) => {
          if (err) {
            return res.send('Something went wrong!!');
          } else {
            res.writeHead(200, {
              'Content-Type': 'text/html',
            });
            res.write(data);
            return res.end();
          }
        });
      }
    }
  })
  .listen(4000, () => {
    console.log('server listening on port 4000');
  });
