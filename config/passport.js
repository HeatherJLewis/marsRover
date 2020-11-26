const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const { PRIVATE_KEY } = require('../config/apiCredentials');

const cookieExtractor = (request) => {
	let token = null;

	if (request && request) {
		token = request.cookies.access_token;
	}

	return token;
};

let options = {
	jwtFromRequest: cookieExtractor,
	secretOrKey: PRIVATE_KEY,
};

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
