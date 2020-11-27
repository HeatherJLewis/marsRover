const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const router = require('./server/routes/routes');
const { configurePassport } = require('./config/passport');
const cookieParser = require('cookie-parser');

configurePassport();

const app = express();
const port = 3000;

app.use(passport.initialize());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(
	express.urlencoded({
		extended: true,
	})
);

app.use(express.static('./app/homepage/'));
app.use(router);

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
