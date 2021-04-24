const express = require('express');
const https = require('https');
const app = express();
const path = require('path');

app.use(express.json());
express.static("static");

app.use('/', (req, res) => {
  res.sendFile(path.join(__dirname +'/static/index.html'));
});

const server = https.createServer(app);
const port = 3000;
server.listen(port);
console.debug('Server listening on port ' + port);
