const http = require('http');

const server = http.createServer((req, res) => {
  res.end("Hello from ECS 🚀");
});

server.listen(3000);
