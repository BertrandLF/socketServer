// npm modules
var http = require('http');
var url = require('url');

// ports
var httpPort = 8888;

function onHttpRequest(request, response){
  const requestUrl = url.parse(request.url);
  console.log('pathname:', requestUrl.pathname, 'query:', requestUrl.query);

  const text = '<html><head><body><ul>'
        + "<li>Request for '" + requestUrl.pathname + "' received.</li>" 
        + "<li>Query for '" + requestUrl.query + "' received.</li>"
        + "</ul></head><body></html>";

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
