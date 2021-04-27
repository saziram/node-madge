const madge = require('./../../../lib/api');
const targetDependencyPath = './test';

//set dependency target path to create madge object
const madgeObj = madge(targetDependencyPath);

//import router object to utilize restfull http methods to capture client service request
const router = require('express').Router();

//constants for restfull service endpoints
const API_Routes = {
	objectAPI: ['/', '/warnings', '/circular', '/circularGraph', '/depends', '/orphans', '/leaves'],
	svgImage: '/generateGraph'
}

//routes for object reponses
router.get(API_Routes.objectAPI, function (req, res) {
	madgeObj.then((result) => {
		const madgeFunc = req.path.substring(1) || "obj";
		const respJSON = result[madgeFunc]();
		res.json(respJSON);		
	});
});

//routes for graph generation
router.get(API_Routes.svgImage, function (req, res) {
	madgeObj.then((res) => res.svg())
	.then((output) => {
		res.write(output.toString());
	});
});

module.exports = router

