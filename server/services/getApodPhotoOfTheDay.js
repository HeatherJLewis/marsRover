const axios = require('axios');
const logger = require('../../config/logger');
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
		logger.warn(`${error.name}: ${error.message}`);
		return Promise.reject(new Error(`${error.name}: ${error.message}`));
	}
};

module.exports = {
	getApodImageAndExplanation,
};
