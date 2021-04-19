import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { fstat } from 'node:fs';
import * as path from "path"
import * as uuid from "uuid"
import * as fs from "fs"

@Injectable()
export class FilesService {

  async createFile(file: any): Promise<string> {
    try {
      const fileName = uuid.v4() + '.jpg'
      const filePath = path.resolve(__dirname, '..', 'static')

      if (!fs.existsSync(filePath)) {
        fs.mkdirSync(filePath, {recursive: true})
      }

      fs.writeFileSync(path.join(filePath, fileName), file.buffer)

      return fileName;
    } catch (error) {
      throw new HttpException('Error during file saving', HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

}
