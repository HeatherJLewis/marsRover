const express = require('express');

const router = express.Router();

router.use('/login', express.static('frontend/login.html'));

router.get('/apod', (request, response) => {
	response.send('Astronomy Photo Of the Day!');
});

module.exports = router;
