"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var strings_1 = require("../../strings");
exports.saveData = function (ipc, data) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        ipc.on(strings_1.SAVE_DATA, function (event, message) {
            var opt = JSON.parse(message);
            switch (opt.type) {
                case strings_1.CREATE_NEW_ACCOUNT:
                    data.accounts.push(opt.payload);
                    //save('accounts', data.accounts)
                    break;
                case strings_1.CREATE_NEW_ADDRESS:
                    data.addresses.push(opt.payload);
                    //save('addresses', data.addresses)
                    break;
                case strings_1.CREATE_NEW_BROWSER:
                    data.browsers.push(opt.payload);
                    //save('browsers', data.browsers)
                    break;
                case strings_1.CREATE_NEW_BROWSER_GROUP:
                    data.browserGroups.push(opt.payload);
                    //save('browserGroups', data.browserGroups)
                    break;
                case strings_1.CREATE_NEW_CREDIT_CARD:
                    data.creditCards.push(opt.payload);
                    //save('credotCards', data.browsers)
                    break;
                case strings_1.CREATE_NEW_PROFILE:
                    data.profiles.push(opt.payload);
                    //save('profiles', data.browsers)
                    break;
                case strings_1.CREATE_NEW_PROXIES:
                    data.proxies = __spreadArrays(data.proxies, opt.payload);
                    //save('proxies', data.proxies)
                    break;
                case strings_1.CREATE_NEW_PROXY_GROUP:
                    data.proxyGroups.push(opt.payload);
                    //save('proxyGroups', data.proxyGroups)
                    break;
                case strings_1.UPDATE_ADDRESS_GROUPS:
                    data.addressGroups = opt.payload;
                    //save('addressGroups', data.addressGroups)
                    break;
                case strings_1.UPDATE_BROWSERS:
                    data.browsers = opt.payload;
                case strings_1.UPDATE_CREDIT_CARD_GROUPS:
                    data.creditCardGroups = opt.payload;
                    //save('creditCardGroups', data.creditCardGroups)
                    break;
                case strings_1.UPDATE_PROXIES:
                    data.proxies = opt.payload;
                    //save('proxies', data.proxies)
                    break;
                case strings_1.UPDATE_PROXY_GROUPS:
                    data.proxyGroups = opt.payload;
                    //save('proxyGroups', data.proxyGroups)
                    break;
                case strings_1.UPDATE_BROWSER_GROUPS:
                    data.browserGroups = opt.payload;
                    //save('browserGroups', data.browserGroups)
                    break;
                case strings_1.UPDATE_TASKS:
                    data.tasks = opt.payload;
                    //save('tasks', data.tasks)
                    break;
                default:
                    break;
            }
        });
        return [2 /*return*/];
    });
}); };
//# sourceMappingURL=save-data.js.map