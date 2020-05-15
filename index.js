// Barebones NodeJS server that serves HTML
var express = require('express');
var app = express();
var path = require('path');
// const PORT = process.env.PORT || 5000

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(8080);
