const express = require('express');
const jwt = require('jsonwebtoken');
const { PRIVATE_KEY } = require('./config/apiCredentials');

const router = express.Router();

router.use('/login', express.static('frontend/login.html'));

router.post('/authenticate', (request, response) => {
	const { username, password } = request.body;
	const token = jwt.sign({ username, password }, PRIVATE_KEY);

	response.cookie('access_token', token, { httpOnly: true });
	response.send('We have made a JWT for you!');
});

module.exports = router;
