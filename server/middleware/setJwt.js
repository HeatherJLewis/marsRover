const jwt = require('jsonwebtoken');
const { PRIVATE_KEY } = require('../../config/apiCredentials');

const setJwtOnAccessToken = (request, response) => {
	const { username, password } = request.body;
	const token = jwt.sign({ username, password }, PRIVATE_KEY);

	response.cookie('access_token', token, { httpOnly: true });
	response.send('We have made a JWT for you!');
};

module.exports = {
	setJwtOnAccessToken,
};
