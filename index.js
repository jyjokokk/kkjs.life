// Barebones NodeJS server that serves HTML
const express = require('express');
const app = express()
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send('<h1>KORTEPOHJAN KRISTILLISEN JUOMASEURA FOR LIFE</h1>')
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
});

