const express = require('express');
const app = express();
const port = 3000;
const router = require('./server/routes/routes');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
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
