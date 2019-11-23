const express = require('express');

const app = express();

const { sayHello } = require('../src/lib/strings');

app.get('/strings/hello/:string', (req, res) => {
  res.status(200).json({ result: `${sayHello(req.params.string)}` });
});

module.exports = app;
