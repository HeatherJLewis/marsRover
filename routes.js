const express = require('express');
const jwt = require('jsonwebtoken');
const { PRIVATE_KEY } = require('./config/apiCredentials');
const { checkForUser } = require('./checkForUser');

const { getApod } = require('./frontend/apod');
const router = express.Router();

router.use('/login', express.static('frontend/login.html'));

router.post('/authenticate', checkForUser, (request, response) => {
	const { username, password } = request.body;
	const token = jwt.sign({ username, password }, PRIVATE_KEY);

	response.cookie('access_token', token, { httpOnly: true });
	response.send('We have made a JWT for you!');
});

router.get('/apod', (request, response) => {
	getApod().then(data =>
		response.send(data));
});

module.exports = router;
