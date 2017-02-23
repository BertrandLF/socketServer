const WebSocketServer = require('ws').Server;

export class WsServer {

  wsPort;

  start(port): void {
    this.wsPort = port;
    const wss = new WebSocketServer({ port: this.wsPort });
    wss.on('connection', ws => {
      console.log('\nWS Connection established');
      console.log(ws.upgradeReq.headers);

      ws.on('message', data => {
        const parsed = JSON.parse(data);
        console.log('Received a message:', parsed);

        const response = {
          source: 'socketServer',
          port: this.wsPort,
          message: 'You sent ' + parsed.message
        };
        ws.send(JSON.stringify(response));
      });
    });
  }
}
