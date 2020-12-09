const express = require('express');
const passport = require('passport');
const user = require('./routers/user');
const { getUsername } = require('../middleware/getUsername');
const { checkForUser } = require('../middleware/checkForUser');
const { setJwtOnAccessToken } = require('../middleware/setJwt');
const {
	getImageAndExplanationForHomepage,
} = require('../middleware/getPhotoAndTextForHomepage.js');
const { registerUser } = require('../middleware/registerUser');

const router = express.Router();

router.use(express.static('./app/homepage'));
router.use(express.static('./app/services'));
router.use('/login', express.static('app/login'));
router.use('/register', express.static('app/register'));

router.get('/apod', getImageAndExplanationForHomepage);
router.post('/authenticate', checkForUser, setJwtOnAccessToken);
router.post('/registration', registerUser, setJwtOnAccessToken);
router.get('/getUsername', getUsername);

router.use('/user', [
	passport.authenticate('jwt', { session: false, failureRedirect: '/login' }),
	user,
]);

module.exports = router;
