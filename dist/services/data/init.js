var fs = require('fs');
var path = require('path');
var init = function () {
    return new Promise(function (res, rej) {
        try {
            var data_1 = {};
            var files_1 = [
                'accounts',
                'addresses',
                'addressGroups',
                'browsers',
                'browserGroups',
                'creditCards',
                'creditCardGroups',
                'profiles',
                'proxies',
                'proxyGroups',
                'sites',
                'tasks'
            ];
            var _loop_1 = function (i) {
                var fileName = files_1[i];
                var filePath = "" + path.join(__dirname, "../../../data/" + fileName + ".json");
                fs.readFile(filePath, 'utf8', function (err, fileContent) {
                    if (err)
                        throw err;
                    data_1[fileName] = JSON.parse(fileContent);
                    if (i === files_1.length - 1)
                        res(data_1);
                });
            };
            for (var i = 0; i < files_1.length; i++) {
                _loop_1(i);
            }
        }
        catch (err) {
            res(err);
        }
    });
};
module.exports = { init: init };
//# sourceMappingURL=init.js.map