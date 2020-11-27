const jwtDecode = require('jwt-decode');

const getUsername = (request, response) => {
	const accessToken = request.cookies.access_token;
	const { username } = jwtDecode(accessToken);
	response.json({ username });
};

module.exports = {
	getUsername,
};
