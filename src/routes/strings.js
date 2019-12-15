const express = require('express');

const router = express.Router();
const strings = require('../../src/lib/strings');

router.get('/hello/:string', (req, res) => {
  res.status(200).json({ result: `${strings.sayHello(req.params.string)}` });
});

router.get('/upper/:string', (req, res) => {
  res.status(200).json({ result: `${strings.uppercase(req.params.string)}` });
});

router.get('/lower/:string', (req, res) => {
  res.status(200).json({ result: `${strings.lowercase(req.params.string)}` });
});

router.get('/first-characters/:string', (req, res) => {
  res.status(200).json({ result: `${strings.firstCharacters(req.params.string, req.query.length)}` });
});

module.exports = router;
