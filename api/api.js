const express = require('express');
const apiRouter = express.Router()
const artistRouter = require('./artists')

apiRouter.use('/artist', artistRouter);

module.exports = apiRouter;