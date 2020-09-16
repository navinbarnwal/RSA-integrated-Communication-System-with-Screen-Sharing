
let app = require('express')();
let http = require('http').Server(app);
let sio = require('socket.io')(http);

sio.on('connection', socket => {
  // Log whenever a user connects
  console.log('user connected');

  // Log whenever a client disconnects from our websocket server
  socket.on('disconnect', function() {
    console.log('user disconnected');
  });

  // When we receive a 'message' event from our client, print out
  // the contents of that message and then echo it back to our client
  // using `io.emit()`
  socket.on('message', message => {
    console.log('Message Received: ' + message);
    sio.emit('message', { type: 'new-message', text: message });
  });
});

// Initialize our websocket server on port 5000
http.listen(5000, () => {
  console.log('started on port 5000');
});
