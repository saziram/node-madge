const express = require("express"), app = express();
const router = require('./server/middlewares/router');

app.use(router);

app.listen(4000, () => {   
	console.log('Server listening at 4000');
});  