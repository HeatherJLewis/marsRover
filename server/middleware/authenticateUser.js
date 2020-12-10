const passport = require('passport');

const authenticateUser = (request, response, next) => {
	passport.authenticate('jwt', (error, user) => {
		if (error) {
			return next(error);
		}
		if (!user) {
			return response.json({ username: '' });
		}
		next();
	})(request, response, next);
};

module.exports = { authenticateUser };
