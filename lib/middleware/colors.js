const { Router } = require('express');
const red = require('../middleware/red');
const blue = require('../middleware/blue');
const yellow = require('../middleware/yellow');
const colors = require('../middleware/colors');

module.exports = (req, res, next) => {
  req.colors = [];
  next();
};
