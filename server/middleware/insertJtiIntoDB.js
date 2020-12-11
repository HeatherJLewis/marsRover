const { JwtIds } = require('../../database/models');
const { v4: uuidv4 } = require('uuid');
const logger = require('../../config/logger');
const {
	JWT_EXPIRATION_TIME_IN_SECONDS,
} = require('../../config/apiCredentials');

const insertJtiIntoDB = (request, response, next) => {
	const { userId } = request.body;
	const jti = uuidv4();
	const expiryTimeInSeconds =
    Math.floor(Date.now() / 1000) + JWT_EXPIRATION_TIME_IN_SECONDS;

	JwtIds.create({ jti, exp: expiryTimeInSeconds, userId }).catch((error) => {
		logger.warn(`${error.title}: ${error.message}`);
	});

	request.body.exp = expiryTimeInSeconds;
	request.body.jti = jti;

	next();
};

module.exports = {
	insertJtiIntoDB,
};
