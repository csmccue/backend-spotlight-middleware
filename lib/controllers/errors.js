const { Router } = require('express');

module.exports = Router()

  .get('/teapot', (req, res) =>  {
    res.status(418).send('Sick news bro');
  })
;
