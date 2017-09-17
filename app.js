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

var client_id = "8e29e22b346472922215";
var client_secret = "861a468b30cd055d1b531f8106cd7e6662a1b471";
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
    // post 

    var code = req.query.code;

    var options = {
      "method" : "POST",
      "url" : "https://github.com/login/oauth/access_token",
      form : {
        "client_id":client_id,
        "client_secret":client_secret,
        "code":code,
        "accept":"json"
      }
    }
    request.post(options, function(err, response, body) {
        if (err == null) {
          console.log(body);
          console.log(body.split("&")[0].split("=")[1]);
          var qs = {"access_token": body.split("&")[0].split("=")[1]};
          
          request.get({
            url:"https://api.github.com/user/emails", 
            headers:{
             'User-Agent':'Faliteren'
            }, 
            qs:qs, 
            json:true}, function (e, r, user) {
              console.log(user[0].email);
              req.openCookie.user = user[0].email;
          })
        }
    });
   
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






