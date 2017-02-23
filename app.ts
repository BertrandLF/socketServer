// npm modules
const http = require('http');
const url = require('url');

// ports
const httpPort = 8888;

function onHttpRequest(request, response) {
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

// create http server
console.log('starting server');
http.createServer(onHttpRequest).listen(httpPort);
