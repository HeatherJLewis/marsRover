const { Users } = require('../../database/models');
const logger = require('../../config/logger');
const shortid = require('shortid');

const registerUser = (request, response, next) => {
	const { username, password, emailAddress } = request.body;
	Users.create({ username, password, emailAddress, userId: shortid.generate() })
		.then(() => {
			next();
		})
		.catch((error) => {
			logger.warn(`${error.title}: ${error.message}`);
		});
};

module.exports = {
	registerUser,
};
