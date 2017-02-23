import { WsServer } from './servers/wsServer';
import { HttpServer } from './servers/httpServer';

// ports
const httpPort = 8888;
const wsPort = 8889;

const httpServer = new HttpServer();
httpServer.start(httpPort);

const wsServer = new WsServer();
wsServer.start(wsPort);
