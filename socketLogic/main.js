const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 9999 })

connectedSockets = [];

function broadcastMessage(inMessage) {
    for (let i = 0; i < connectedSockets.length; i++) {
        connectedSockets[i].send(inMessage);
    }
}

wss.on('connection', ws => {
    connectedSockets.push(ws);
    ws.on('message', message => {
        console.log(`Received message => ${message}`)
        if (message == "gameover") {
            broadcastMessage("forcegameover");
        } if (message == "reset") {
            let myPlatform = process.platform;
            console.log(myPlatform);
            broadcastMessage("forcereset");
        }
    });
    ws.on('close', () => {
        console.log("Socket closed");
        broadcastMessage("closed");
    })
})

console.log("Web Socket ready for connections!");
