/* eslint-disable max-statements-per-line */
const express = require('express');

const router = express.Router();
const numberController = require('../controllers/numbers');

router.get('/add/:n1/and/:n2', numberController.add);

router.get('/add/:n1/and/:n2', numberController.add);

router.get('/subtract/:n2/from/:n1', numberController.subtract);

router.post('/multiply', numberController.multiply);

module.exports = router;
