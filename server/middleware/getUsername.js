const jwtDecode = require('jwt-decode');

const getUsername = (request, response) => {
	const accessToken = request.cookies.access_token;
	try {
		const { username } = jwtDecode(accessToken);
		response.json({ username });
	} catch (error) {
		console.log(error);
		response.json({});
	}
};

module.exports = {
	getUsername,
};
