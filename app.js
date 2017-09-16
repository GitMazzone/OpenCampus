var express = require('express')
var request = require('request')
var sessions = require("client-sessions");
var mongo 
var app = express()
var port = process.env.PORT || 5000;
var server = require('http').createServer(app);
app.use(express.static('public'));
var io = require('socket.io')(server);








server.listen(port, function () {
  console.log("server running on port: " + port.toString())
});


io.on('connection', function (socket) {
  users[socket.id] = {}
  socket.emit('init', { hello: 'world' });
  socket.on('init', function (data) {
    // search for event in our list and add params
  });






});






