#!/usr/bin/env node

var _require = require('process');

var argv = _require.argv;

var merger = require('../lib/index.js');

// send help command


if (argv.length < 3) {
    console.log('Usage: jmg <folder> <output>');
}

// get folder and output from command line
var folder = argv[2];
var output = argv[3];
merger(folder, output);
