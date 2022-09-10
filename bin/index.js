// call from global 
'use strict';
const { argv } = require('process');
const merger  = require('../lib/index.js');

// send help command


if (argv.length < 4) {
    console.log('Usage: json-merger <folder> <output>');
    return;
}

// get folder and output from command line
const folder = argv[2];
const output = argv[3];
merger(folder, output);