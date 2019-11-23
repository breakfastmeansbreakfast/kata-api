const express = require('express');

const app = express();

const strings = require('../src/lib/strings');

app.get('/strings/hello/:string', (req, res) => {
  res.status(200).json({ result: `${strings.sayHello(req.params.string)}` });
});

app.get('/strings/upper/:string', (req, res) => {
  res.status(200).json({ result: `${strings.uppercase(req.params.string)}` });
});

app.get('/strings/lower/:string', (req, res) => {
  res.status(200).json({ result: `${strings.lowercase(req.params.string)}` });
});

app.get('/strings/first-characters/:string', (req, res) => {
  res.status(200).json({ result: `${strings.firstCharacters(req.params.string, req.query.length)}` });
});

module.exports = app;
