//Music collaboration tool or idk

var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
const fs = require("fs");
const path = require("path");
__dirname = path.resolve(path.dirname(''));
server.listen(8069);
var rooms=[]
app.get('/', function(req,res){
	res.sendFile(path.join(__dirname, "room.html"));
});
app.get('/join', function(req,res){
	res.sendFile(path.join(__dirname, "room.html"));
});

io.on('connection', function (socket) {
  console.log("connected" + socket.client)
  socket.on('note', function (data) {
		console.log("note played on "+socket.client.room+" "+": "+data);
		socket.broadcast.emit('note', data);
  });
});
