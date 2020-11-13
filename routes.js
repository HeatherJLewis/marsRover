const express = require('express');
const jwt = require('jsonwebtoken');
const { privateKey } = require('./config/apiCredentials');

const router = express.Router();

router.use('/login', express.static('frontend/login.html'));

router.post('/authenticate', (request, response) => {
	const { username , password } = request.body;
	const token = jwt.sign({username, password}, privateKey );

	response.header('Authorization', 'bearer ' +token);
	response.send('We have made a JWT for you!');
});

module.exports = router;
