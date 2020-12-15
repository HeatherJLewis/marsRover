const checkIfAdmin = (request, response, next) => {
	const { accessRole } = request.body;
	if (accessRole === 'admin' || accessRole === 'superUser') {
		next();
	} else {
		response.status(403);
		response.send('Access to this area is restricted');
	}
};

const checkIfSuperUser = (request, response, next) => {
	const { accessRole } = request.body;
	if (accessRole === 'superUser') {
		next();
	} else {
		response.status(403);
		response.send('Access to this area is restricted');
	}
};

module.exports = { checkIfAdmin, checkIfSuperUser };
