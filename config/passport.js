const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const { PRIVATE_KEY } = require('../config/apiCredentials');
const { Users } = require('../database/models');
const logger = require('./logger');

const extractJwt = (request) => {
	if (request && request) {
		return request.cookies.access_token;
	}

	return null;
};

let options = {
	jwtFromRequest: extractJwt,
	secretOrKey: PRIVATE_KEY,
};

const configurePassport = () => {
	passport.use(
		new JwtStrategy(options, (jwt_payload, done) => {
			const username = jwt_payload.username;
			const password = jwt_payload.password;

			Users.findAll({
				where: {
					username: username,
					password: password,
				},
			})
				.then((data) => {
					if (data.length > 0) {
						return done(null, jwt_payload);
					} else {
						return done(null, false);
					}
				})
				.catch((error) => {
					logger.warn(`${error.title}: ${error.message}`);
				});
		})
	);
};

module.exports = {
	configurePassport,
};
