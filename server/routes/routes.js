const express = require('express');
const { checkForUser } = require('../middleware/checkForUser');
const { setJwtOnAccessToken } = require('../middleware/setJwt');

const router = express.Router();

router.use('/login', express.static('app/login'));

router.post('/authenticate', checkForUser, setJwtOnAccessToken);

router.use('/rover', express.static('app/marsRoverPath'));

module.exports = router;
