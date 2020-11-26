const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const { PRIVATE_KEY } = require('../config/apiCredentials');

<<<<<<< HEAD
const extractJwt = (request) => {
	if (request && request) {
		return request.cookies.access_token;
=======
const cookieExtractor = (request) => {
	let token = null;

	if (request && request.headers.cookie) {
		token = request.headers.cookie.split('=')[1];
>>>>>>> marsRover15: Retrieves the username and serves as JSON on the /getUsername endpoint
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
