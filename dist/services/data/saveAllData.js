"use strict";
exports.__esModule = true;
var fs = require("fs");
var path = require("path");
exports.saveAllData = function (data) {
    var files = Object.keys(data);
    for (var i = 0; i < files.length; i++) {
        var fileName = files[i];
        var filePath = "" + path.join(__dirname, "../../data/" + fileName + ".json");
        var json = JSON.stringify(data[fileName]);
        fs.writeFileSync(filePath, json, 'utf8');
    }
};
//# sourceMappingURL=saveAllData.js.map