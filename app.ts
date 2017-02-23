import { HttpServer } from './servers/httpServer';
// npm modules
const ws = require('ws');
// ports
const httpPort = 8888;
const wsPort = 8889;

const httpServer = new HttpServer();
httpServer.start(httpPort);

