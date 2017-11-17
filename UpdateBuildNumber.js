#!/usr/bin/env node

module.exports = function(context) {
  // require modules
  var 
    util = require('util'),
    fs = require('fs'),
    path = require('path'),
    xml2js = require('xml2js');
    svninfo = require('svn-info');                

  // setup objects    
  var 
    fileName = 'config.xml',
    filePath = path.normalize(path.join(context.opts.projectRoot, fileName)),
    parser = new xml2js.Parser();        
    
  function buildXML(obj) {
    var builder = new xml2js.Builder();
    builder.options.renderOpts.indent = '\t';
    var x = builder.buildObject(obj);
    return x.toString();
  }
    
  function rewriteConfig(result) {
    fs.writeFile(filePath, buildXML(result), {encoding: 'utf8'}, function(err) {
      if (err) throw err;
      console.log('Saved in ' + fileName);
    });
  }
    
  function parseConfig(configOpts) {
    var info = require('svn-info').sync('.');
    var newVersion = 5000 + parseInt(info.revision);
    configOpts.widget.$['android-versionCode'] = newVersion; 
    configOpts.widget.$['ios-CFBundleVersion'] = newVersion;
    configOpts.widget.$['osx-CFBundleVersion'] = newVersion; 
    configOpts.widget.$['windows-packageVersion'] = newVersion;
    rewriteConfig(configOpts);
  }

  // Read config.xml
  fs.readFile(filePath, {encoding:'utf8'}, function(err, data) {
    if (err) throw err;
    parser.parseString(data, function(err, result){
      if (err) throw err;

      parseConfig(result);
    });
  });
};