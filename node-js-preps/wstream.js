const fs = require('fs');

// Create a writable stream
const writableStream = fs.createWriteStream('output.js');

// Write data to the stream
writableStream.write('const add = (a,b)=>a+b ');

// Finish writing
writableStream.end('');

writableStream.on('finish', () => {
    console.log('Wrote all data to file.');
});

writableStream.on('error', function(err) {
    console.error('Error:', err);
});
