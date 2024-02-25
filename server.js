const WebSocket = require('ws');

const PORT = 5000;

const wsServer = new WebSocket.Server({
	port: PORT
});

wsServer.on("connection",function(socket){
	console.log("A client just connected");
	// Attach some behaviour to the incoming socket
	socket.on('message', function(msg){
		console.log("Received msg from client : "+ msg);
		socket.send("here is your message " + msg);

	// send message to all the sockets
	wsServer.clients.forEach(function (client){
		client.send("Someone said: "+ msg)
	})
	})
	
})

console.log("Server is listening on " + PORT)