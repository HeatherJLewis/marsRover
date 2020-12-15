const express = require('express');
const user = require('./routers/user');
const { checkForUser } = require('../middleware/checkForUser');
const { setJwtOnAccessToken } = require('../middleware/setJwt');
const {
	getImageAndExplanationForHomepage,
} = require('../middleware/getPhotoAndTextForHomepage.js');
const { registerUser } = require('../middleware/registerUser');
const { insertJtiIntoDB } = require('../middleware/insertJtiIntoDB');
const { getUsername } = require('../middleware/getUsername');
const {
	authenticateUserForUsername,
} = require('../middleware/authenticateUserForUsername');
const { authenticate } = require('../middleware/authenticate');
const router = express.Router();

router.use(express.static('./app/homepage'));
router.use(express.static('./app/services'));
router.use('/login', express.static('app/login'));
router.use('/register', express.static('app/register'));

router.get('/apod', getImageAndExplanationForHomepage);
router.get('/getUsername', authenticateUserForUsername, getUsername);

router.post(
	'/authenticate',
	checkForUser,
	insertJtiIntoDB,
	setJwtOnAccessToken
);

router.post(
	'/registration',
	registerUser,
	insertJtiIntoDB,
	setJwtOnAccessToken
);

router.use('/user', [authenticate, user]);

module.exports = router;
