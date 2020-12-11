const jwtDecode = require('jwt-decode');
const { JwtIds } = require('../../database/models');

const logoutUser = (request, response) => {
	const accessToken = request.cookies.access_token;
	const { jti } = jwtDecode(accessToken);

	JwtIds.destroy({
		where: {
			jti: jti,
		},
	});

	response.clearCookie('access_token');
	response.redirect('/');
};

module.exports = {
	logoutUser,
};
