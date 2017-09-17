var express = require('express')
var request = require('request')
var sessions = require("client-sessions");
var mongoose = require('mongoose');
var mongo 
var app = express()
var port = process.env.PORT || 5000;
var server = require('http').createServer(app);
app.use(express.static('public'));
var io = require('socket.io')(server);

app.use(sessions({
    cookieName: 'openCookie', // cookie name dictates the key name added to the request object
    secret: '034jfg939codeathelon9429', // should be a large unguessable string
    duration: 24 * 60 * 60 * 1000, // how long the session will stay valid in ms
    cookie: {
      path: '/api', // cookie will only be sent to requests under '/api'
      maxAge: 60000, // duration of the cookie in milliseconds, defaults to duration above
      ephemeral: false, // when true, cookie expires when the browser closes
      httpOnly: true, // when true, cookie is not accessible from javascript
      secure: false // when true, cookie will only be sent over SSL. use key 'secureProxy' instead if you handle SSL not in your node process
    }
  }));




  
  
app.get("/confirmed", function(req, res) {
    console.log(req.query);
});




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






