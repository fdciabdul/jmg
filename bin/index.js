#!/usr/bin/env node
const { argv } = require('process');
const merger  = require('../lib/index.js');

// send help command


if (argv.length < 3) {
    console.log('Usage: json-merger <folder> <output>');
    return;
}

// get folder and output from command line
const folder = argv[2];
const output = argv[3];
merger(folder, output);
