const axios = require('axios');
const { NASA_API_KEY } = require('../../config/apiCredentials');

const queryParameters = {
	params: {
		api_key: NASA_API_KEY,
	},
};

const getApodImageAndExplanation = async () => {
	try {
		const apodData = await axios.get(
			'https://api.nasa.gov/planetary/apod',
			queryParameters
		);
		return apodData;
	} catch (error) {
		return Promise.reject(new Error(`${error.name}: ${error.message}`));
	}
};

module.exports = {
	getApodImageAndExplanation,
};
