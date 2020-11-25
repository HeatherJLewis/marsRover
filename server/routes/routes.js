const express = require('express');
const passport = require('passport');

const { checkForUser } = require('../middleware/checkForUser');
const { setJwtOnAccessToken } = require('../middleware/setJwt');
const {
	getImageAndExplanationForHomepage,
} = require('../middleware/getPhotoAndTextForHomepage.js');
const { response } = require('express');

const router = express.Router();

router.use('/login', express.static('app/login'));
router.use('/rover', express.static('app/marsRoverPath'));
router.use(
	'/userAccountPage',
	((request, response, done) => {
		// console.log(request.cookies)
		done();
	}),
	passport.authenticate('jwt', { session: false }),
	(request, response) => {
		response.send("Hello User!")
	}
);

router.get('/apod', getImageAndExplanationForHomepage);

router.post('/authenticate', checkForUser, setJwtOnAccessToken);

module.exports = router;
