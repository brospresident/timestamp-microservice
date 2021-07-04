const express = require('express');

const { httpGetResponseFromDate } = require('./api.controller')

const apiRouter = express.Router();

apiRouter.get('/:date?', httpGetResponseFromDate);

module.exports = apiRouter;