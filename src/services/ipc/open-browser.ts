import { OPEN_BROWSER } from '../../../../tilted_aio_shared/strings'
import { open } from '../browser/open'
export const openBrowser = async (ipc: any, data: any) => {
	ipc.on(OPEN_BROWSER, async (event: any, message: any) => {
		console.log('open-browser');
		const opt = JSON.parse(message);
		const browser = data.browsers.find((b: any) => b.id === opt.payload);
		if (!!browser.proxyId) {
			browser.proxy = data.proxies.find((proxy: any) => proxy.id === browser.proxyId);
		}
		open(browser);
	});
};
