const axios = require('axios');
const { NASA_API_KEY } = require('../../config/apiCredentials');

const queryParameters = {
	params: {
		api_key: NASA_API_KEY,
	},
};

const getApod = async () => {
	try {
		const apodData = await axios.get(
			'https://api.nasa.gov/planetary/apod',
			queryParameters
		);
		return apodData;
	} catch (error) {
		console.error('Error', error);
	}
};

const getApodImageAndExplanation = async (request, response) => {
	try {
		const body = await getApod();
		const { url, explanation } = body.data;
		response.send({ url, explanation });
	} catch (error) {
		console.error('Error', error);
	}
};

module.exports = {
	getApodImageAndExplanation,
};
