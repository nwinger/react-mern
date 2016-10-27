// TODO: Configure linting

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.listen(port);

console.log(`Your server is running on port ${port}.`);
