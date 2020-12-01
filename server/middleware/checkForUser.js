const { Users } = require('../../database/models');

const checkForUser = (request, response, next) => {
	const { username, password } = request.body;

	Users.findAll({
		where: {
			username: username,
			password: password,
		},
	}).then((data) => {
		console.log(data);
		if (data[0]) {
			next();
		} else {
			response.redirect('/login');
		}
	});
};

module.exports = {
	checkForUser,
};
