const { Users } = require('../../database/models');
const logger = require('../../config/logger');
const shortid = require('shortid');
const bcrypt = require('bcrypt');

const registerUser = (request, response, next) => {
	const { username, password, emailAddress } = request.body;
	const userId = shortid.generate();

	Users.create({ username, emailAddress, userId })
		.then(() => {
			const saltRounds = 10;
			return bcrypt.hash(password, saltRounds);
		})
		.then((hash) => {
			return Users.update(
				{ hash: hash },
				{
					where: {
						username: username,
						userId: userId,
					},
				}
			);
		})
		.then(() => {
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
