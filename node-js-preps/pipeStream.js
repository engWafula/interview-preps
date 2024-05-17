const fs = require('fs');
const zlib = require('zlib');

// Compress a file
fs.createReadStream('fs.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('fs.txt.gz'));

console.log('File compressed.');
