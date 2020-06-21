"use strict";
exports.__esModule = true;
var fs = require("fs");
var path = require("path");
exports.save = function (fileName, data) {
    var filePath = "" + path.join(__dirname, "../../data/" + fileName + ".json");
    var json = JSON.stringify(data);
    fs.writeFileSync(filePath, json, 'utf8');
};
//# sourceMappingURL=save.js.map