const passport = require('passport');
const jwtDecode = require('jwt-decode');
const { Users, JwtIds, Roles } = require('../../database/models');

const userAuthenticate = (request, response, next) => {
	const accessToken = request.cookies.access_token;
	const { jti } = jwtDecode(accessToken);

	JwtIds.findAll({ where: { jti: jti } }).then((data) => {
		Users.findAll({ where: { userId: data[0].dataValues.userId } }).then(
			(data) => {
				Roles.findAll({ where: { roleId: data[0].dataValues.roleId } }).then(
					(data) => {
						console.log(data[0].dataValues.accessRole);
					}
				);
			}
		);
	});

	passport.authenticate('jwt', (error, user) => {
		if (error) {
			return next(error);
		}
		if (!user) {
			return response.redirect('/login');
		}
		next();
	})(request, response, next);
};

module.exports = { userAuthenticate };
