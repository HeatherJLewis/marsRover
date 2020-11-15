const checkForUser = (request, response, next) => {
	const { username , password } = request.body;

	if(username === 'Bob' && password === 'cat'){
		next();
	}

	response.send('No access for you!');
};

module.exports = {
	checkForUser
};
