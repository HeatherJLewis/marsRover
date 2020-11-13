const express = require('express');

const router = express.Router();

router.use('/login', express.static('frontend/login.html'));

router.post('/authenticate', (request, response) => {
	response.send(request.body);
});

module.exports = router;
