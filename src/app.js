const express = require('express');

const app = express();

const strings = require('../src/lib/strings');
const numbers = require('../src/lib/numbers');

// strings
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

// numbers
app.get('/numbers/add/:n1/and/:n2', (req, res) => {
  const isNumeric = (string) => { return /^\d+$/.test(string); };
  if (isNumeric(req.params.n1) || isNumeric(req.params.n2)) {
    res.status(200).json({ result: numbers.add((+req.params.n1), (+req.params.n2)) });
  } else {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }
});

// numbers
app.get('/numbers/add/:n1/and/:n2', (req, res) => {
  const isNumeric = (string) => { return /^\d+$/.test(string); };
  if (isNumeric(req.params.n1) || isNumeric(req.params.n2)) {
    res.status(200).json({ result: numbers.add((+req.params.n1), (+req.params.n2)) });
  } else {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }
});

// numbers
app.get('/numbers/subtract/:n2/from/:n1', (req, res) => {
  const isNumeric = (string) => { return /^\d+$/.test(string); };
  if (isNumeric(req.params.n1) || isNumeric(req.params.n2)) {
    res.status(200).json({ result: numbers.subtract((+req.params.n1), (+req.params.n2)) });
  } else {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }
});



module.exports = app;
