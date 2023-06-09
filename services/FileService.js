import * as uuid from 'uuid'
import * as path from 'path'

class FileService {
  async saveFile(file) {
    try {
      const fileName = uuid.v4() + '.png'
      const filePath = path.resolve('static', fileName)
      await file.mv(filePath)
      return fileName
    } catch (e) {
      console.log(e)
    }

  }
}

export default new FileService()