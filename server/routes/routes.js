const express = require('express');
const passport = require('passport');
const user = require('./routers/user');
const { checkForUser } = require('../middleware/checkForUser');
const { setJwtOnAccessToken } = require('../middleware/setJwt');
const {
	getImageAndExplanationForHomepage,
} = require('../middleware/getPhotoAndTextForHomepage.js');
const { registerUser } = require('../middleware/registerUser');
const { insertJtiIntoDB } = require('../middleware/insertJtiIntoDB');
const { getUsername } = require('../middleware/getUsername');
const { authenticateUser } = require('../middleware/authenticateUser');

const router = express.Router();

router.use(express.static('./app/homepage'));
router.use(express.static('./app/services'));
router.use('/login', express.static('app/login'));
router.use('/register', express.static('app/register'));
router.use('/user', [
	passport.authenticate('jwt', { session: false, failureRedirect: '/login' }),
	user,
]);

router.get('/apod', getImageAndExplanationForHomepage);
router.get('/getUsername', authenticateUser, getUsername);

router.post(
	'/authenticate',
	checkForUser,
	insertJtiIntoDB,
	setJwtOnAccessToken
);
router.post('/registration', registerUser, setJwtOnAccessToken);

module.exports = router;
