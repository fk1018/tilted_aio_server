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
exports.__esModule = true;
// Modules to control application life and create native browser window
exports.main = function (url, proxyz) {
    console.log('starting main');
    var _a = require('electron'), app = _a.app, BrowserWindow = _a.BrowserWindow, session = _a.session;
    // Keep a global reference of the window object, if you don't, the window will
    // be closed automatically when the JavaScript object is garbage collected.
    var mainWindow;
    var proxy = !!proxyz ? getProxy(proxyz) : false;
    console.log(proxy.ip, proxy.port, proxy.userName, proxy.password);
    function createWindow() {
        return __awaiter(this, void 0, void 0, function () {
            var err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // Create the browser window.
                        mainWindow = new BrowserWindow({
                            title: 'Tilted AIO',
                            width: 375,
                            height: 812
                        });
                        mainWindow.on('closed', function () {
                            // Dereference the window object, usually you would store windows
                            // in an array if your app supports multi windows, this is the time
                            // when you should delete the corresponding element.
                            mainWindow = null;
                        });
                        //Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.116 Safari/537.36 - linux chrome
                        session.defaultSession.webRequest.onBeforeSendHeaders(function (details, callback) {
                            details.requestHeaders['User-Agent'] =
                                'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1';
                            callback({ requestHeaders: details.requestHeaders });
                        });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, mainWindow.loadURL(url)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        console.log(err_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    }
    function getProxy(string) {
        var proxyArr = string.split(':');
        return {
            ip: proxyArr[0],
            port: proxyArr[1],
            userName: proxyArr[2],
            password: proxyArr[3]
        };
    }
    app.on('ready', createWindow);
    // Quit when all windows are closed.
    app.on('window-all-closed', function () {
        // On macOS it is common for applications and their menu bar
        // to stay active until the user quits explicitly with Cmd + Q
        if (process.platform !== 'darwin')
            app.quit();
    });
    app.on('login', function (event, webContents, request, authInfo, callback) {
        event.preventDefault();
        callback(proxy.userName, proxy.password);
    });
    if (!!proxy) {
        app.commandLine.appendSwitch('proxy-server', "http://" + proxy.ip + ":" + proxy.port);
    }
    app.on('activate', function () {
        if (mainWindow === null)
            createWindow();
    });
};
var args = process.argv[2].split(' ');
if (args.length > 1) {
    exports.main(args[0], args[1]);
}
else {
    exports.main(args[0], null);
}
//# sourceMappingURL=createBrowser.js.map