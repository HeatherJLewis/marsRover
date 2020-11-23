const express = require('express');
const { checkForUser } = require('../middleware/checkForUser');
const { setJwtOnAccessToken } = require('../middleware/setJwt');
const { getImageAndExplanationForHomepage } = require('../middleware/getApod');

const router = express.Router();

router.use('/login', express.static('app/login'));
router.use('/rover', express.static('app/marsRoverPath'));

router.get('/apod', getImageAndExplanationForHomepage);

router.post('/authenticate', checkForUser, setJwtOnAccessToken);

module.exports = router;
