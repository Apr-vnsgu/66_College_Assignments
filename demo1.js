const http = require('http');
const valid = require('./valid');

const server = http.createServer((req, res) => {
  console.log('Your Request' + req.url);
  res.write('Exported Files\t' + valid.f1());
  res.end();
});
server.listen(8000, () => {
  console.log('Listening on port 8000');
});
