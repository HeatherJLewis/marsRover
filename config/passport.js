const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const { PRIVATE_KEY } = require('../config/apiCredentials');
const { JwtIds } = require('../database/models');
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
			const jti = jwt_payload.jti;

			JwtIds.findAll({
				where: {
					jti: jti,
				},
			})
				.then((data) => {
					const expiryDateInMilliseconds = data[0].dataValues.exp * 1000;
					if (data.length > 0 && expiryDateInMilliseconds > Date.now()) {
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
