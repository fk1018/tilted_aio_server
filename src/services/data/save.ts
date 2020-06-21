import * as fs from 'fs'
import * as path from 'path'

export const save = (fileName: any, data: any) => {
  const filePath = `${path.join(__dirname, `../../data/${fileName}.json`)}`
  const json = JSON.stringify(data)
  fs.writeFileSync(filePath, json, 'utf8')
}