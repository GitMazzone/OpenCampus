var express = require('express')
var request = require('request')
var sessions = require("client-sessions");

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

function getDirections(origin, destination, callback){
  var options = {"url": directionsEndpoint,
  qs:{"origin": origin,
  "destination": destination,
  "mode": "transit",
  json:true,
  "key":googleAPI}};

  request.get(options, function(error, response, body) {
    results = JSON.parse(body)    
    if (results.status == "ZERO_RESULTS") {
      callback({status: "error"})
    } else {
      console.log(results.routes[0].legs.length)
      var duration = results.routes[0].legs[0].duration.text;
      var distance = results.routes[0].legs[0].distance.text;

      console.log(duration);
      console.log(distance);
      retObj = {}
      retObj["distance"] = distance;
      retObj["duration"] = duration;
      retObj["directions"] = results.routes[0].legs[0].steps;
      retObj["status"] = "OK";
      callback(retObj);

    }
  });
}






