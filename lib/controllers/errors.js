const { Router } = require('express');

module.exports = Router()

  .get('/teapot', (req, res) =>  {
    res.status(418).send('Sick news bro');
  })

  .get('/payment', (req, res) =>  {
    res.status(402).send('I cant believe youve done this');
  })

;
