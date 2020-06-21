import { openAllBrowsers } from './open-all-browsers'
import { openBrowser } from './open-browser'
import { openBrowserGroup } from './open-browser-group'
import { saveData } from './save-data'
export const bindIPCHandlers = async (ipc: any, data: any) => {
	await saveData(ipc, data);
	await openBrowser(ipc, data);
	await openAllBrowsers(ipc, data);
	await openBrowserGroup(ipc, data);
};

