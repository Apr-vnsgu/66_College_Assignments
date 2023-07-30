var fs = require('fs');
var zlib = require('zlib');
fs.createReadStream('./something.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('./something.txt.gz'));
console.log('File Compressed.');
