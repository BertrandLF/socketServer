const http = require('http');
const url = require('url');

export class HttpServer {

  onHttpRequest(request, response) {
    const requestUrl = url.parse(request.url);
    console.log('pathname:', requestUrl.pathname, 'query:', requestUrl.query);
    const text = `<html><head/><body>
         <div>Request ${requestUrl.pathname} received.</div>
         <div>Query ${requestUrl.query} received.</div>
         </body></html>`;
    response.writeHead(200, {
      'Content-Type': 'text/html',
      'Content-Length': text.length
    });
    response.write(text);
    response.end();
  }

  start(port) {
    // create http server
    http.createServer(this.onHttpRequest).listen(port);
    console.log('server started');
  }
}
