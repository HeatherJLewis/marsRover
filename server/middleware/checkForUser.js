const logger = require('../../config/logger');
const { Users } = require('../../database/models');
const bcrypt = require('bcrypt');

const checkForUser = (request, response, next) => {
	const { username, password } = request.body;

	const passwordAndHashMatch = (data) => {
		return bcrypt.compare(password, data[0].dataValues.hash);
	};

	Users.findAll({
		where: {
			username: username,
		},
	})
		.then((data) => {
			if (data.length > 0) {
				request.body.userId = data[0].dataValues.userId;
				return passwordAndHashMatch(data);
			} else {
				return false;
			}
		})
		.then((result) => {
			if (result) {
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
