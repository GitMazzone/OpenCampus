var express = require('express')
var request = require('request')
// var sessions = require("client-sessions");
var session = require('express-session')
var app = express()
var port = process.env.PORT || 5000;
var server = require('http').createServer(app);
var AWS = require('aws-sdk');
var path = require("path");
AWS.config.loadFromPath(path.resolve(__dirname,'config.json'));

var docClient = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});


 
app.use(express.static('public'));
var io = require('socket.io')(server);

var client_id = "8e29e22b346472922215";
var client_secret = "861a468b30cd055d1b531f8106cd7e6662a1b471";
// app.use(sessions({
//   secret: "fd34s@!@dfa453f3DF#$D&W", 
//   resave: false, 
//   saveUninitialized: true, 
// }));
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}))


app.get("/isLoggedIn", function(req, res) {
  if (req.session.sess != null && req.session.sess != undefined) {
    res.send({"session":req.session.sess});
  } else {
    res.send({"session":null});
  }

});
  
  
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
              req.session.sess = user[0].email;
              

              findUser(req.session.sess, function(err, data) {
                
                if (err) {
                  console.log("Error", err);

                  res.send("Something went wrong!");
                  
                } else if (data.Item == undefined) {
    
                    createUser(req.session.sess, function(err, data) {
                      if (err) {
                        console.log("Error", err);
                        res.send("Please try that again. Something went wrong!");
                        
                      } else {
                        console.log("Success", data);
                        res.send("<script> window.location = '/' </script>");
                        
                      }
                    });
                  } else if (data.Item.Email == req.session.sess) {
                    //existing
                    //do nothing
                    res.send("<script> window.location = '/' </script>");

                  } else {
                    //add into db
                    createUser(req.session.sess, function(err, data) {
                      if (err) {
                        console.log("Error", err);
                        res.send("Please try that again. Something went wrong!");
                        
                      } else {
                        console.log("Success", data);
                        res.send("<script> window.location = '/' </script>");
                        
                      }
                    });
                  }
                
              });

          })
        }
    });
   
});


function createUser(user, callback) {
  var params = {
    TableName: 'User',
    Item: {'Email': user}
   };
   docClient.put(params, callback(err, data));

}


function findUser(user, callback) {
  var params = {
    TableName: 'User',
    Key: {'Email': user}
   };
   docClient.get(params, callback(err, data));

}


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






