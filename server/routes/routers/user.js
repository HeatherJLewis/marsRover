const express = require('express');

const user = express.Router();

user.use('/accountPage', express.static('app/userAccountPage'));
user.use('/rover', express.static('app/marsRoverPath'));

module.exports = user;
