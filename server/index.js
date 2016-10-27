const router = require('./router');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
router(app);
app.listen(port);

// eslint-disable-next-line
console.log(`Your server is running on port ${port}.`);
