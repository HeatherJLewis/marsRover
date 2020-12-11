const jwt = require('jsonwebtoken');
const { PRIVATE_KEY } = require('../../config/apiCredentials');

const setJwtOnAccessToken = (request, response) => {
	const { exp, jti } = request.body;
	const token = jwt.sign({ exp, jti }, PRIVATE_KEY);

	response.cookie('access_token', token, { httpOnly: true });
	response.redirect('/');
};

module.exports = {
	setJwtOnAccessToken,
};
