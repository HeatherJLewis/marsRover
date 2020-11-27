const express = require('express');

const accountRouter = express.Router();

accountRouter.get('/userHomepage', express.static('app/homepage'));

module.exports = accountRouter;
