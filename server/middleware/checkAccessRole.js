const checkIfAdmin = (request, response, next) => {
	const { accessRole } = request.body;

	if (accessRole === 'admin') {
		next();
	} else {
		response.status(403);
		response.send('No dashboard for you');
	}
};

module.exports = { checkIfAdmin };
