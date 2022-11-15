import * as fs from 'fs/promises'
import { isAccessible } from './utils/accessible.js'
import { program } from './utls/commander.js'
import { handleerror } from './utils/handleerror.js'

import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

program.parse(process.argv)