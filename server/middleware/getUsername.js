const jwtDecode = require('jwt-decode');
const logger = require('../../config/logger');
const { JwtIds, Users } = require('../../database/models');

const getUsername = (request, response) => {
	const accessToken = request.cookies.access_token;
	try {
		if (accessToken) {
			const { jti } = jwtDecode(accessToken);
			JwtIds.findAll({ where: { jti: jti } }).then((data) => {
				Users.findAll({ where: { userId: data[0].dataValues.userId } }).then(
					(data) => {
						response.json({ username: data[0].dataValues.username });
					}
				);
			});
		} else {
			response.json({});
		}
	} catch (error) {
		logger.warn(`${error.title}: ${error.message}`);
	}
};

module.exports = {
	getUsername,
};
