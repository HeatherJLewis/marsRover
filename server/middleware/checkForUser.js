const logger = require('../../config/logger');
const { Users } = require('../../database/models');
const bcrypt = require('bcrypt');

const checkForUser = (request, response, next) => {
	const { username, password } = request.body;

	const matchPasswordToStoredHash = (resultFromDatabaseQuery) => {
		return bcrypt.compare(password, resultFromDatabaseQuery[0].dataValues.hash);
	};

	Users.findAll({
		where: {
			username: username,
		},
	})
		.then((resultFromDatabaseQuery) => {
			if (resultFromDatabaseQuery.length > 0) {
				request.body.userId = resultFromDatabaseQuery[0].dataValues.userId;
				return matchPasswordToStoredHash(resultFromDatabaseQuery);
			} else {
				return false;
			}
		})
		.then((matchesHashedPassword) => {
			if (matchesHashedPassword) {
				next();
			} else {
				response.redirect('/login');
			}
		})
		.catch((error) => {
			logger.warn(`${error.title}: ${error.message}`);
		});
};

module.exports = {
	checkForUser,
};
