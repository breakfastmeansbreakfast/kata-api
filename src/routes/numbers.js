/* eslint-disable max-statements-per-line */
const express = require('express');

const router = express.Router();
const numbers = require('../../src/lib/numbers');

router.get('/add/:n1/and/:n2', (req, res) => {
  const isNumeric = (string) => { return /^\d+$/.test(string); };
  if (isNumeric(req.params.n1) || isNumeric(req.params.n2)) {
    res.status(200).json({ result: numbers.add((+req.params.n1), (+req.params.n2)) });
  } else {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }
});

router.get('/add/:n1/and/:n2', (req, res) => {
  const isNumeric = (string) => { return /^\d+$/.test(string); };
  if (isNumeric(req.params.n1) || isNumeric(req.params.n2)) {
    res.status(200).json({ result: numbers.add((+req.params.n1), (+req.params.n2)) });
  } else {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }
});

router.get('/subtract/:n2/from/:n1', (req, res) => {
  const isNumeric = (string) => { return /^\d+$/.test(string); };
  if (isNumeric(req.params.n1) || isNumeric(req.params.n2)) {
    res.status(200).json({ result: numbers.subtract((+req.params.n1), (+req.params.n2)) });
  } else {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }
});

router.post('/multiply', (req, res) => {
  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);
  if (req.body.a === undefined || req.body.b === undefined) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (!isNaN(a) || !isNaN(b)) {
    res.status(200).json({ result: numbers.multiply((a), (b)) });
  } else {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }
});

module.exports = router;
