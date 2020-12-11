const express = require('express');
const { logoutUser } = require('../../middleware/logoutUser');

const user = express.Router();

user.use('/accountPage', express.static('app/userAccountPage'));
user.use('/rover', express.static('app/marsRoverPath'));
user.use('/logout', logoutUser);

module.exports = user;
