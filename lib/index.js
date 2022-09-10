"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var fs = require("fs");

/**
 * merge multi json file in folder into one json file
 * @date 2022-09-10
 * @param {any} folder
 * @param {any} output
 * @returns {any}
 */
function mergeJsonFile(folder, output) {
    var _ref;

    var files = fs.readdirSync(folder);
    var jsons = files.map(function (file) {
        var json = fs.readFileSync(folder + "/" + file);
        return JSON.parse(json);
    });
    var merged = (_ref = []).concat.apply(_ref, _toConsumableArray(jsons));
    fs.writeFileSync(output, JSON.stringify(merged, null, 2));
}

module.exports = mergeJsonFile;
