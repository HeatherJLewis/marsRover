const express = require('express');
const { logoutUser } = require('../../middleware/logoutUser');
const admin = require('./admin');
const { checkIfAdmin } = require('../../middleware/checkAccessRole');

const user = express.Router();

user.use('/accountPage', express.static('app/userAccountPage'));
user.use('/rover', express.static('app/marsRoverPath'));
user.use('/logout', logoutUser);
user.use('/admin', [checkIfAdmin, admin]);

module.exports = user;
