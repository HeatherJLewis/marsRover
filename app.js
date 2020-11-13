const express = require('express');
const app = express();
const port = 3000;
const router = require('./routes');
const bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use(express.static('frontend'));
app.use(router);

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
