const { Users } = require('../../database/models');
const logger = require('../../config/logger');
const shortid = require('shortid');

const registerUser = (request, response) => {
	const { username, password, emailAddress } = request.body;
	Users.create({ username, password, emailAddress, userId: shortid.generate() })
		.then(() => {
			response.redirect('./login');
		})
		.catch((error) => {
			logger.warn(`${error.title}: ${error.message}`);
		});
};

module.exports = {
	registerUser,
};
