const logger = require('../../config/logger');
const { Users } = require('../../database/models');

const checkForUser = (request, response, next) => {
	const { username, password } = request.body;

	Users.findAll({
		where: {
			username: username,
			password: password,
		},
	})
		.then((data) => {
			if (data[0]) {
				request.body.userId = data[0].dataValues.userId;
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
