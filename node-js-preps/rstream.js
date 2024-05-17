const fs = require('fs');

// Create a readable stream
const readableStream = fs.createReadStream('fs.txt', { encoding: 'utf8' });

// Handle stream events: data, end, and error
readableStream.on('data', function(chunk) {
    console.log('New chunk received:');
    console.log(chunk);
});

readableStream.on('end', function() {
    console.log('No more data to read.');
});

readableStream.on('error', function(err) {
    console.error('Error:', err.message);
});
