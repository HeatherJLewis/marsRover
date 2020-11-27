const express = require('express');
const { getUsername } = require('../../middleware/getUsername');

const user = express.Router();

user.use('/accountPage', express.static('app/userAccountPage'));
user.use('/rover', express.static('app/marsRoverPath'));
user.get('/getUsername', getUsername);

module.exports = user;
