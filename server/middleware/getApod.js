const { getPhotoOfTheDay } = require('../services/getPhotoOfTheDay');

const getApodImageAndExplanation = async (request, response) => {
	try {
		const body = await getPhotoOfTheDay();
		const { url, explanation } = body.data;
		response.send({ url, explanation });
	} catch (error) {
		response
			.status(500)
			.send(
				'We have problems retrieving today\'s photo. Please try again later'
			);
	}
};

module.exports = {
	getApodImageAndExplanation,
};
