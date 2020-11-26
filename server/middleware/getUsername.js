const jwtDecode = require('jwt-decode');

const getUsername = (request, response) => {
	const accessToken = request.headers.cookie.split('=')[1];
	const { username } = jwtDecode(accessToken);
	response.send(username);
};

module.exports = {
	getUsername,
};
