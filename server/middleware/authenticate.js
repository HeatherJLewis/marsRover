const passport = require('passport');
const jwtDecode = require('jwt-decode');
const { Users, JwtIds, Roles } = require('../../database/models');

const authenticate = (request, response, next) => {
	const accessToken = request.cookies.access_token;
	const { jti } = jwtDecode(accessToken);

	const getAccessRole = () => {
		JwtIds.findAll({ where: { jti: jti } }).then((data) => {
			Users.findAll({ where: { userId: data[0].dataValues.userId } }).then(
				(data) => {
					Roles.findAll({ where: { roleId: data[0].dataValues.roleId } }).then(
						(data) => {
							// console.log(data[0].dataValues.accessRole)
							return data[0].dataValues.accessRole;
						}
					);
				}
			);
		});
	};

	passport.authenticate('jwt', (error, user) => {
		if (error) {
			return next(error);
		}
		if (!user) {
			return response.redirect('/login');
		}
		getAccessRole();
		request.body.accessRole = 'admin';
		next();
	})(request, response, next);
};

module.exports = { authenticate };
