const express = require('express');

const { httpGetResponseFromDate, httpGetEmptyParameter } = require('./api.controller')

const apiRouter = express.Router();

apiRouter.get('/:date', httpGetResponseFromDate);
apiRouter.get('/', httpGetEmptyParameter);

module.exports = apiRouter;