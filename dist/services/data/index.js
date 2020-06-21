var add = require('./add').add;
var getBrowserProfiles = require('./get-browser-profiles').getBrowserProfiles;
var init = require('./init').init;
var _a = require('./save'), save = _a.save, saveAll = _a.saveAll;
var data = { add: add, getBrowserProfiles: getBrowserProfiles, init: init, save: save, saveAll: saveAll };
module.exports = { data: data };
//# sourceMappingURL=index.js.map