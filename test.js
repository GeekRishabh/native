// index.js


socket.on('sendMessage', function(data) {
console.log(data);
for(var i in users)
{
    if(data.to == users[i].name)
 {
	 var t=users[i].id;
	  console.log(data.message);
		io.sockets.connected(t).emit('newMessage',data.message);

 }
 }

});




//index.html


var $data ={ to:'abc1' ,
             message:'Testing',
             from:'abc'
            };

socket.emit('sendMessage',$data );

socket.on('newMessage',function (data) {
    console.log(data);
   //document.write(data);
   //alert(data);

});
