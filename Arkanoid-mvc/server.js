const http = require('http');
const WebSocket = require('ws');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        const filePath = path.join(__dirname, 'index.html');
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error loading the page');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    }
});

const wss = new WebSocket.Server({ server });
wss.on('connection', (ws) => {
    ws.on('message', (message) => {
        console.log('Received:', message);
    });

    ws.send(JSON.stringify({ message: 'Welcome to Arkanoid!' }));
});

server.listen(8080, () => {
    console.log('Server running on http://localhost:8080');
});
