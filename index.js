var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
users = [];
connections = [];

server.listen(process.env.PORT || 3000);
console.log('server running..');

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

io.sockets.on('connection',function (socket) {
	connections.push(socket);

	//newUsers
	socket.on('newUser', function(data, callback){
		callback(false);
		socket.username = data;
		users.push({
				'name':socket.username,
				'id':socket.id
			});
		console.log(users);
		updateUsers();
	});

	// updateUsers
	function updateUsers(){
		io.sockets.emit('getUsers', users);
	}
	//sendMessage-privatemessages
socket.on('sendMessage',function(data) {
        // console.log(data.message);
	 socket.broadcast.to(data.to).emit('newMessage',data);
});
socket.on('sendMessage1',function(data) {
        // console.log(data.message);
	 socket.broadcast.to(data.to).emit('newMessage1',data);
});



	});
