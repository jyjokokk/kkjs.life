// Barebones NodeJS server that serves HTML
const express = require('express');
const path = require('path')
const PORT = process.env.PORT || 5000
const app = express()

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
});

