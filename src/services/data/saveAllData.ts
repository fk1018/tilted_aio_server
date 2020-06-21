import * as fs from 'fs'
import * as path from 'path'

export const saveAllData = (data: any) => {
  const files = Object.keys(data)
  for (let i = 0; i < files.length; i++) {
    const fileName = files[i]
    const filePath = `${path.join(__dirname, `../../data/${fileName}.json`)}`
    const json = JSON.stringify(data[fileName])
    fs.writeFileSync(filePath, json, 'utf8')
  }
}