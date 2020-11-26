const jwtDecode = require('jwt-decode');

const getUsername = (request, response) => {
<<<<<<< HEAD
	const accessToken = request.cookies.access_token;
	const { username } = jwtDecode(accessToken);
	response.json({ username });
=======
	const accessToken = request.headers.cookie.split('=')[1];
	const { username } = jwtDecode(accessToken);
	response.send(username);
>>>>>>> marsRover15: Retrieves the username and serves as JSON on the /getUsername endpoint
};

module.exports = {
	getUsername,
};
