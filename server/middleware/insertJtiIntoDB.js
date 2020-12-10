const { JwtIds } = require('../../database/models');
const { v4: uuidv4 } = require('uuid');
const logger = require('../../config/logger');

const insertJtiIntoDB = (request, response, next) => {
	const { userId } = request.body;
	const jti = uuidv4();
	const TEN_MINS_IN_SECONDS = 10 * 60;
	const expiryTimeinSeconds =
    Math.floor(Date.now() / 1000) + TEN_MINS_IN_SECONDS;

	JwtIds.create({ jti, exp: expiryTimeinSeconds, userId }).catch((error) => {
		logger.warn(`${error.title}: ${error.message}`);
	});

	request.body.exp = expiryTimeinSeconds;
	request.body.jti = jti;

	next();
};

module.exports = {
	insertJtiIntoDB,
};