import * as fs from 'fs'
import * as path from 'path'

export const initializeData = () => {
  return new Promise(function (res, rej) {
    try {
      const data: any = {}
      const files = [
        'accounts',
        'addresses',
        'addressGroups',
        'browsers',
        'browserGroups',
        'creditCards',
        'creditCardGroups',
        'profiles',
        'proxies',
        'proxyGroups',
        'sites',
        'tasks'
      ]
      for (let i = 0; i < files.length; i++) {
        const fileName = files[i]
        const filePath = `${path.join(
          __dirname,
          `../../../data/${fileName}.json`
        )}`
        fs.readFile(filePath, 'utf8', function (err: any, fileContent: any) {
          if (err) throw err
          data[fileName] = JSON.parse(fileContent)
          if (i === files.length - 1) res(data)
        })
      }
    } catch (err) {
      res(err)
    }
  })
}
