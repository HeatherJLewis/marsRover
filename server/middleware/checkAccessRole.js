const checkIfAdmin = (request, response, next) => {
	const { accessRole } = request.body;
	console.log(accessRole);
	if (accessRole === 'admin' || accessRole === 'superUser') {
		next();
	} else {
		response.status(403);
		response.send('No dashboard for you'); //generic message
	}
};

const checkIfSuperUser = (request, response, next) => {
	const { accessRole } = request.body;
	console.log(accessRole);
	if (accessRole === 'superUser') {
		next();
	} else {
		response.status(403);
		response.send('No super dashboard for you');
	}
};

module.exports = { checkIfAdmin, checkIfSuperUser };
