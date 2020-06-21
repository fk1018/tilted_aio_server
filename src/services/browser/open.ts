import { exec } from 'child_process'
export const open = async (browser: any) => {
	const command = !!browser.proxy
		? `yarn createbrowser "${browser.browserURL} ${browser.proxy.fullProxy}"`
		: `yarn createbrowser "${browser.browserURL}"`;
	console.log(command);
	exec(command);
};
