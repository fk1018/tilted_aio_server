import { app, BrowserWindow } from "electron";
import { saveAllData } from "./services/data/saveAllData";
const ipc = require('electron').ipcMain
import * as path from 'path'
import * as isDev from 'electron-is-dev'
import { initializeData } from "./services/data/initializeData";
import { bindIPCHandlers } from "./services/ipc/bind";
import { LOAD_INITIAL_DATA } from "./strings";
let mainWindow: any;

let data: any;
app.on('ready', createWindow)
app.on('window-all-closed', () => {
  saveAllData(data)
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

async function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1100,
    height: 780,
    webPreferences: {
      nodeIntegration: true
    }
  })
  mainWindow.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`
  )
  if (isDev) {
    // Open the DevTools.
    //BrowserWindow.addDevToolsExtension('<location to your react chrome extension>');
    // mainWindow.webContents.openDevTools();
  }
  mainWindow.on('closed', (): any => (mainWindow = null))
  data = await initializeData()
  bindIPCHandlers(ipc, data)
  mainWindow.webContents.on('did-finish-load', () => {
    mainWindow.webContents.send(LOAD_INITIAL_DATA, JSON.stringify(data))
  })
}
