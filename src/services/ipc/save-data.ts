import { save } from '../data/save';
import {
  SAVE_DATA,
  CREATE_NEW_ACCOUNT,
  CREATE_NEW_ADDRESS,
  CREATE_NEW_BROWSER,
  CREATE_NEW_BROWSER_GROUP,
  CREATE_NEW_CREDIT_CARD,
  CREATE_NEW_PROFILE,
  CREATE_NEW_PROXIES,
  CREATE_NEW_PROXY_GROUP,
  UPDATE_ADDRESS_GROUPS,
  UPDATE_BROWSERS,
  UPDATE_CREDIT_CARD_GROUPS,
  UPDATE_PROXIES,
  UPDATE_PROXY_GROUPS,
  UPDATE_BROWSER_GROUPS,
  UPDATE_TASKS
} from '../../../../tilted_aio_shared/strings';
export const saveData = async (ipc: any, data: any) => {
  ipc.on(SAVE_DATA, (event: any, message: any) => {
    const opt = JSON.parse(message);
    switch (opt.type) {
      case CREATE_NEW_ACCOUNT:
        data.accounts.push(opt.payload);
        //save('accounts', data.accounts)
        break;
      case CREATE_NEW_ADDRESS:
        data.addresses.push(opt.payload);
        //save('addresses', data.addresses)
        break;
      case CREATE_NEW_BROWSER:
        data.browsers.push(opt.payload);
        //save('browsers', data.browsers)
        break;
      case CREATE_NEW_BROWSER_GROUP:
        data.browserGroups.push(opt.payload);
        //save('browserGroups', data.browserGroups)
        break;
      case CREATE_NEW_CREDIT_CARD:
        data.creditCards.push(opt.payload);
        //save('credotCards', data.browsers)
        break;
      case CREATE_NEW_PROFILE:
        data.profiles.push(opt.payload);
        //save('profiles', data.browsers)
        break;
      case CREATE_NEW_PROXIES:
        data.proxies = [...data.proxies, ...opt.payload];
        //save('proxies', data.proxies)
        break;
      case CREATE_NEW_PROXY_GROUP:
        data.proxyGroups.push(opt.payload);
        //save('proxyGroups', data.proxyGroups)
        break;
      case UPDATE_ADDRESS_GROUPS:
        data.addressGroups = opt.payload;
        //save('addressGroups', data.addressGroups)
        break;
      case UPDATE_BROWSERS:
        data.browsers = opt.payload;
      case UPDATE_CREDIT_CARD_GROUPS:
        data.creditCardGroups = opt.payload;
        //save('creditCardGroups', data.creditCardGroups)
        break;
      case UPDATE_PROXIES:
        data.proxies = opt.payload;
        //save('proxies', data.proxies)
        break;
      case UPDATE_PROXY_GROUPS:
        data.proxyGroups = opt.payload;
        //save('proxyGroups', data.proxyGroups)
        break;
      case UPDATE_BROWSER_GROUPS:
        data.browserGroups = opt.payload;
        //save('browserGroups', data.browserGroups)
        break;
      case UPDATE_TASKS:
        data.tasks = opt.payload;
        //save('tasks', data.tasks)
        break;
      default:
        break;
    }
  });
};
