const http = require('http');

http
  .createServer((request, response) => {
    if (request.method === 'GET' && request.url === '/date') {
      response.writeHead(200, { 'Content-Type': 'text/plain' });
      response.end(new Date().toISOString(), 'utf-8');
    } else if (request.method === 'GET' && request.url === '/') {
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.end(
        '<h1>The Date Client</h1><a href="/date">Get date from server</a>'
      );
    } else {
      response.writeHead(404, { 'Content-Type': 'text/plain' });
      response.end('Sorry, that is not there');
    }
  })
  .listen(59999);

console.log('Date Server running at port 59999');
