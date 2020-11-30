const jwtDecode = require('jwt-decode');

const getUsername = (request, response) => {
	const accessToken = request.cookies.access_token;
	try {
		if (accessToken) {
			const { username } = jwtDecode(accessToken);
			response.json({ username });
		} else {
			response.json({});
		}
	} catch (error) {
		console.log(error);
	}
};

module.exports = {
	getUsername,
};
