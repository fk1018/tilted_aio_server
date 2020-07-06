// Modules to control application life and create native browser window
export const main = (url: any, proxyz: any) => {
	console.log('starting main');
	const { app, BrowserWindow, session } = require('electron');
	// Keep a global reference of the window object, if you don't, the window will
	// be closed automatically when the JavaScript object is garbage collected.
	let mainWindow: any;
	const proxy: any = !!proxyz ? getProxy(proxyz) : false;
	console.log(proxy.ip, proxy.port, proxy.userName, proxy.password);
	async function createWindow() {
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
		session.defaultSession.webRequest.onBeforeSendHeaders((details: any, callback: any) => {
			details.requestHeaders['User-Agent'] =
				'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1';
			callback({ requestHeaders: details.requestHeaders });
		});

		// let contents = mainWindow.webContents
		// contents.on('did-finish-load', () => {})
		try {
			await mainWindow.loadURL(url);
		} catch (err) {
			console.log(err);
		}
	}

	function getProxy(string: any) {
		const proxyArr = string.split(':');

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
		if (process.platform !== 'darwin') app.quit();
	});

	app.on('login', (event: any, webContents: any, request: any, authInfo: any, callback: any) => {
		event.preventDefault();
		callback(proxy.userName, proxy.password);
	});
	if (!!proxy) {
		app.commandLine.appendSwitch('proxy-server', `http://${proxy.ip}:${proxy.port}`);
	}
	app.on('activate', function () {
		if (mainWindow === null) createWindow();
	});
}

const args = process.argv[2].split(' ');
if (args.length > 1) {
	main(args[0], args[1]);
} else {
	main(args[0], null);
}
