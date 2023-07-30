var fs = require('fs');
var zlib = require('zlib');
fs.createReadStream('./something.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('./something.txt', 'utf-8'));
console.log('File Decompressed.');
