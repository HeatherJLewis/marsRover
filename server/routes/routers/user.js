const express = require('express');
const { getUsername } = require('../../middleware/getUsername');

const user = express.Router();

user.use('/accountPage', express.static('app/userAccountPage'));
user.get('/getUsername', getUsername);
user.use('/rover', express.static('app/marsRoverPath'));

module.exports = user;
