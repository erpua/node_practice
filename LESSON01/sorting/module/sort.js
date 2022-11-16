import * as fs from 'fs/promises'
import { isAccessible } from '../utils/accessible.js'
import { handleError } from '../utils/handleerror.js'
//extname => imports inner methods from path
import { extname, join } from 'path'

class SortFiles {
  constructor(dist) {
    this.dist = dist
  }


  //# => private method()
  async #copyFile(file) { 
    const folder = extname(file.path)
    const targetPath = join(this.dist, folder)
    try {
      if(!(await isAccessible(targetPath))) {
        await fs.mkdir(targetPath)
      }
      // copyFile file.path =A in this route
      // copyfile join => put it into target path with his name
      await fs.copyFile(file.path, join(targetPath, file.name))
    } catch (e) {
      handleError(e)
    }
  }

  async readFolder(base) {
    const files = await fs.readdir(base)
    for( const item of files ) {
      const localBase = join(base, item)
      //stat => reading objects
      const state = await fs.stat(localBase)
      if(state.isDirectory()) {
        await this.readFolder(localBase)
      } else {
        await this.#copyFile({
          name: item,
          path: localBase
        })
      }
    }
  }
}

export default SortFiles