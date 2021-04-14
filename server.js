const os = require('os');
const path = require('path');
const fs = require('mz/fs');
const madge = require('./lib/api');

const express = require("express"), app = express();
const dotENV = require("dotenv");
const bodyParser = require("body-parser");
const { headers } = require('./server/middlewares/headers');
//const dbConfig = require("./server/config/dbConfig.json");
const router = require('./server/middlewares/router');

// middlewares
app.use(bodyParser.json());
app.use(headers);
app.use(router);

app.listen(process.env.PORT || 4000, () => {
	dotENV.config({ path: "./server/.env" });    
	console.log('Server listening at 4000');
});  