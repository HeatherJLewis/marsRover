const { Users } = require('../../database/models');
const logger = require('../../config/logger');
const shortid = require('shortid');
const bcrypt = require('bcrypt');

const registerUser = (request, response, next) => {
	const { username, password, emailAddress } = request.body;
	const userId = shortid.generate();

	Users.create({ username, password, emailAddress, userId })
		.then(() => {
			const saltRounds = 10;

			bcrypt.hash(password, saltRounds, (error, hash) => {
				Users.update(
					{ hash: hash },
					{
						where: {
							username: username,
							userId: userId,
						},
					}
				);
			});

			request.body.userId = userId;
			next();
		})
		.catch((error) => {
			logger.warn(`${error.title}: ${error.message}`);
		});
};

module.exports = {
	registerUser,
};
