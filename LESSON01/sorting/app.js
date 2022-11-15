import * as fs from 'fs/promises'
import { isAccessible } from './utils/accessible.js'
import { program } from './utls/commander.js'
import { handleError } from './utils/handleerror.js'
import SortFiles from './module/sort.js'

import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

program.parse(process.argv)

/* 

the version before 14 

(async () => {
  await...
}).then(() => {})

*/

if(!(await isAccessible(program.output))) {
  await fs.mkdir(program.output)
}

try {
  const sorting = new SortFiles(program.output)
  await sorting.readFolder(resolve(__dirname, program.folder))
} catch (e) {
  handleError(e)
}

console.log('Can delete source folder')