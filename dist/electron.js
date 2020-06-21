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
var electron_1 = require("electron");
var saveAllData_1 = require("./services/data/saveAllData");
var ipc = require('electron').ipcMain;
var path = require("path");
var isDev = require("electron-is-dev");
var initializeData_1 = require("./services/data/initializeData");
var bind_1 = require("./services/ipc/bind");
var strings_1 = require("./strings");
var mainWindow;
var data;
electron_1.app.on('ready', createWindow);
electron_1.app.on('window-all-closed', function () {
    saveAllData_1.saveAllData(data);
    if (process.platform !== 'darwin') {
        electron_1.app.quit();
    }
});
electron_1.app.on('activate', function () {
    if (mainWindow === null) {
        createWindow();
    }
});
function createWindow() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    mainWindow = new electron_1.BrowserWindow({
                        width: 1100,
                        height: 780,
                        webPreferences: {
                            nodeIntegration: true
                        }
                    });
                    mainWindow.loadURL(isDev
                        ? 'http://localhost:3000'
                        : "file://" + path.join(__dirname, '../build/index.html'));
                    if (isDev) {
                        // Open the DevTools.
                        //BrowserWindow.addDevToolsExtension('<location to your react chrome extension>');
                        // mainWindow.webContents.openDevTools();
                    }
                    mainWindow.on('closed', function () { return (mainWindow = null); });
                    return [4 /*yield*/, initializeData_1.initializeData()];
                case 1:
                    data = _a.sent();
                    bind_1.bindIPCHandlers(ipc, data);
                    mainWindow.webContents.on('did-finish-load', function () {
                        mainWindow.webContents.send(strings_1.LOAD_INITIAL_DATA, JSON.stringify(data));
                    });
                    return [2 /*return*/];
            }
        });
    });
}
//# sourceMappingURL=electron.js.map