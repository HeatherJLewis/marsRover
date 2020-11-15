const checkForUser = (request, response, next) => {
	const { username , password } = request.body;

	const namedParameters = {
		username,
		password
	};

	if(namedParameters.username === 'Bob' && namedParameters.password === 'cat'){
		next();
	}

	response.send('No access for you!');
};

module.exports = {
	checkForUser
};
