const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const Stream = require('node-rtsp-stream');

const stream = new Stream({
  name: 'stream',
  streamUrl: 'rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mov', 
  wsPort: 9999
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html'); 
});

io.on('connection', (socket) => {
  console.log('A user connected');

  stream.on('data', (data) => {
    socket.emit('stream', data);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

const PORT = process.env.PORT || 3001;
http.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
