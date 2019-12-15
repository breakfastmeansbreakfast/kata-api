const strings = require('../../src/lib/strings');

exports.hello = (req, res) => {
  res.status(200).json({ result: `${strings.sayHello(req.params.string)}` });
};

exports.upper = (req, res) => {
  res.status(200).json({ result: `${strings.uppercase(req.params.string)}` });
};

exports.lower = (req, res) => {
  res.status(200).json({ result: `${strings.lowercase(req.params.string)}` });
};

exports.first = (req, res) => {
  res.status(200).json({ result: `${strings.firstCharacters(req.params.string, req.query.length)}` });
};
