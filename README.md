# Simple WebSocket Echo Server
This project is a Node.js-based WebSocket server that provides echo functionality, allowing clients to send messages to the server, which then echoes the messages back to the clients. Additionally, the server supports message broadcasting, enabling it to send the received messages to all connected clients.

## Installation
### Clone the repository:

```bash
git clone https://github.com/mkuhikar/simple-websocket-echo-server.git
```
Navigate to the project directory:

```bash
cd simple-websocket-echo-server
```
### Install dependencies using npm:

```bash
npm install
```
### Usage
To start the WebSocket server, run the following command:

```bash
npm start
```
By default, the server will start on port 5000.

## WebSocket Endpoints
### Echo Endpoint
The echo endpoint allows clients to send messages to the server, which then echoes the messages back to the clients.

Endpoint: /

Method: WebSocket ws://<server_address>:<port>/

Example:

```javascript
const socket = new WebSocket('ws://127.0.01:5000/');


socket.onopen = function() {
  console.log('Connected to WebSocket server');
  socket.send('Hello, server!');
};

socket.onmessage = function(event) {
  console.log('Received message from server:', event.data);
};
```
### Broadcast Endpoint
The broadcast endpoint enables the server to broadcast messages to all connected clients.

Endpoint: /broadcast

Method: WebSocket ws://<server_address>:<port>/broadcast

Example:

```javascript
const socket = new WebSocket('ws://127.0.01:3000/broadcast');

socket.onopen = function() {
  console.log('Connected to WebSocket server');
};

socket.onmessage = function(event) {
  console.log('Received broadcast message:', event.data);
};
```
## Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or create a pull request on the GitHub repository.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
