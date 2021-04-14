const madge = require('./../../../lib/api')('./test');

const express = require('express'),
router = express.Router();

//router.use('/graph', require('./graph'));

router.get('/', function (req, res) {
	madge.then((result) => {
		console.log(result.obj());
		res.json(result.obj());		
	});
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

router.get('/circularGraph', function (req, res) {
	madge.then((result) => {
		console.log(result.circularGraph());
		res.json(result.circularGraph());		
	});
});

router.get('/depends', function (req, res) {
	madge.then((result) => {
		console.log(result.depends());
		res.json(result.depends());		
	});
});

router.get('/orphans', function (req, res) {
	madge.then((result) => {
		console.log(result.orphans());
		res.json(result.orphans());		
	});
});

router.get('/leaves', function (req, res) {
	madge.then((result) => {
		console.log(result.leaves());
		res.json(result.leaves());		
	});
});

router.get('/createSVGImage', function (req, res) {
	madge.then((res) => res.image('path/to/image.svg'))
	.then((writtenImagePath) => {
		console.log('Image written to ' + writtenImagePath);
	});
});

module.exports = router

