const express = require('express');
const http = require('http');
const app = express();
const path = require('path');

app.use(express.json());
express.static("static");

app.use('/', (req, res) => {
  res.sendFile(path.join(__dirname +'/static/index.html'));
});

const server = http.createServer(app);
const port = 443;
server.listen(port);
console.debug('Server listening on port ' + port);
