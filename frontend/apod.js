const axios = require('axios');
const { APOD_API_KEY } = require('../config/apiCredentials');

const queryParameters = {
	params: {
		api_key : APOD_API_KEY
	}
};

// const getApod = () => {
//     axios.get('https://api.nasa.gov/planetary/apod', queryParameters)
//         .then(response => {
//             console.log(response.data)
//         })
//         .catch(error => {
//             console.log(error)
//         })
// };

const getApod = async () => {
	try {
		const apodData = axios.get('https://api.nasa.gov/planetary/apod', queryParameters);
		console.log('Here', apodData);
		return apodData;
	}
	catch (error) {
		console.error(error);
	}
};

getApod();

module.exports = {
	getApod
};
