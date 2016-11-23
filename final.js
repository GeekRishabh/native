// console.log(data.message);
socket.broadcast.to(data.to).emit('newMessage',data);
//console.log(data);
// io.to(data.to).emit('newMessage',data);
//	console.log("daasadas");
 //console.log(data.message);
//io.sockets.socket(data.to).emit('newMessage', data);
//socket.broadcast.emit('newMessage',data); //Everone except him
