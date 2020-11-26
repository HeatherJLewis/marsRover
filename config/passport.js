const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const { PRIVATE_KEY } = require('../config/apiCredentials');

const cookieExtractor = (request) => {
	var token = null;

	if (request && request.headers.cookie) {
		token = request.headers.cookie.split('=')[1];
	}

	return token;
};

let options = {};
options.jwtFromRequest = cookieExtractor;
options.secretOrKey = PRIVATE_KEY;

const configurePassport = () => {
	passport.use(
		new JwtStrategy(options, (jwt_payload, done) => {
			const username = jwt_payload.username;
			const password = jwt_payload.password;

			if (username === 'Bob' && password === 'cat') {
				return done(null, jwt_payload);
			} else {
				return done(null, false);
			}
		})
	);
};

module.exports = {
	configurePassport,
};
