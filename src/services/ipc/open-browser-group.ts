import { OPEN_BROWSER_GROUP } from 'tilted_aio_shared'
import { open } from '../browser/open'
export const openBrowserGroup = async (ipc: any, data: any) => {
	ipc.on(OPEN_BROWSER_GROUP, async (event: any, message: any) => {
		console.log('open-browser-group');
		const opt = JSON.parse(message);
		const browsers = data.browsers.filter((b: any) => b.browserGroupId === opt.payload);
		browsers.forEach((browser: any) => {
			if (!!browser.proxyId) {
				browser.proxy = data.proxies.find((proxy: any) => proxy.id === browser.proxyId);
			}
			open(browser);
		});
	});
};
