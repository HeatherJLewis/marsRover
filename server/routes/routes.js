const express = require('express');
const passport = require('passport');

const { checkForUser } = require('../middleware/checkForUser');
const { setJwtOnAccessToken } = require('../middleware/setJwt');
const {
	getImageAndExplanationForHomepage,
} = require('../middleware/getPhotoAndTextForHomepage.js');

const router = express.Router();

router.get('/login', express.static('app/login'));
router.use('/rover', express.static('app/marsRoverPath'));
router.use('/userAccountPage', [
	passport.authenticate('jwt', { session: false }),
	express.static('app/userAccountPage'),
]);

router.get('/apod', getImageAndExplanationForHomepage);

router.post('/authenticate', checkForUser, setJwtOnAccessToken);

module.exports = router;
