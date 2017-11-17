#!/usr/bin/env node

var
	fs = require('fs'),
	path = require('path'),
	cwd = process.cwd();

var scriptFile = path.join(cwd, '../../scripts', 'UpdateBuildNumber.js');

fs.unlink(scriptFile);
console.log('Removed: ', scriptFile);