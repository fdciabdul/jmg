const fs = require("fs");

/**
 * merge multi json file in folder into one json file
 * @date 2022-09-10
 * @param {any} folder
 * @param {any} output
 * @returns {any}
 */
function mergeJsonFile(folder, output) {
    const files = fs.readdirSync(folder);
    const jsons = files.map((file) => {
        const json = fs.readFileSync(`${folder}/${file}`);
        return JSON.parse(json);
    });
    const merged = [].concat(...jsons);
    fs.writeFileSync(output, JSON.stringify(merged, null, 2));
    }


module.exports = mergeJsonFile;