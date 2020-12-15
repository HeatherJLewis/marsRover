const checkAccessRole = (request, response, next) => {
	console.log('Hello');
	console.log(request.body.accessRole);
	next();
};

module.exports = { checkAccessRole };
