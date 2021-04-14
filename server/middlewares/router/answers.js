const router = require('express').Router();
const madge = require('./../../../lib/api')('../../../test');

router.get(['/getAllAnswers', '/getAnswersByID/:answersID'], tokenVerify, function (req, res) {
     
});

router.get('/warnings', function (req, res) {
	madge.then((result) => {
		console.log(result.warnings());
		res.json(result.warnings());		
	});
});

router.get('/circular', function (req, res) {
	madge.then((result) => {
		console.log(result.circular());
		res.json(result.circular());		
	});
});

router.get('/circular', function (req, res) {
	madge.then((result) => {
		console.log(result.circular());
		res.json(result.circular());		
	});
});

module.exports = router;