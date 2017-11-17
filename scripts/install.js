#!/usr/bin/env node

var
	fs = require('fs'),
	path = require('path'),
	cwd = process.cwd(),
	scriptPath = __dirname;
	
var writePath = path.join(cwd, '../../scripts');

console.log(cwd, scriptPath, writePath);

if(!fs.existsSync(writePath)) {
	console.log('Creating directory: ', writePath);
	fs.mkdirSync(writePath);
}	

var sourceFile = path.join(cwd, 'UpdateBuildNumber.js');

var sourceFileContent = fs.readFileSync(sourceFile);
var targetFile = path.join(writePath, 'UpdateBuildNumber.js')

console.log('Creating update build number hook: ', targetFile)
fs.writeFileSync(targetFile, sourceFileContent); 