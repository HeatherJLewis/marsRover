const passport = require('passport');
const jwtDecode = require('jwt-decode');
const { Users, JwtIds, Roles } = require('../../database/models');
const logger = require('../../config/logger');

const authenticate = (request, response, next) => {
	const accessToken = request.cookies.access_token;
	const { jti } = jwtDecode(accessToken);

	passport.authenticate('jwt', (error, user) => {
		if (error) {
			return next(error);
		}
		if (!user) {
			return response.redirect('/login');
		}
		JwtIds.findAll({ where: { jti: jti } })
			.then((data) => {
				return Users.findAll({ where: { userId: data[0].dataValues.userId } });
			})
			.then((data) => {
				return Roles.findAll({ where: { roleId: data[0].dataValues.roleId } });
			})
			.then((data) => {
				request.body.accessRole = data[0].dataValues.accessRole;
				next();
			})
			.catch((error) => logger.warn(`${error}`));
	})(request, response, next);
};

module.exports = { authenticate };
