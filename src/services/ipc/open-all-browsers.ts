import { open } from '../browser/open'
import { OPEN_ALL_BROWSERS } from '../../strings'

export const openAllBrowsers = async (ipc: any, data: any) => {
	ipc.on(OPEN_ALL_BROWSERS, async (event: any, message: any) => {
		console.log('open-all-browsers');
		const browsers = data.browsers;
		browsers.forEach((browser: any) => {
			if (!!browser.proxyId) {
				browser.proxy = data.proxies.find((proxy: any) => proxy.id === browser.proxyId);
			}
			open(browser);
		});
	});
};
