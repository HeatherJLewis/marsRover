const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const { PRIVATE_KEY } = require('../config/apiCredentials');

let options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = PRIVATE_KEY;

const configurePassport = () => {
	passport.use(
		new JwtStrategy(options, (jwt_payload, done) => {
			console.log(jwt_payload);
			const username = jwt_payload.username;

			if (username === 'Bob') {
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
