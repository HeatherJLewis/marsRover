const express = require('express');
const passport = require('passport');
const user = require('./routers/user');

const { checkForUser } = require('../middleware/checkForUser');
const { setJwtOnAccessToken } = require('../middleware/setJwt');
const {
	getImageAndExplanationForHomepage,
} = require('../middleware/getPhotoAndTextForHomepage.js');

const router = express.Router();

router.use(express.static('./app/homepage/'));
router.use('/login', express.static('app/login'));
router.get('/apod', getImageAndExplanationForHomepage);
router.post('/authenticate', checkForUser, setJwtOnAccessToken);

router.use('/user', [
	passport.authenticate('jwt', { session: false, failureRedirect: '/login' }),
	user,
]);

module.exports = router;
