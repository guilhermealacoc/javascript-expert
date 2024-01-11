const { readFile } = require('fs/promises')
const DEFAULT_OPTION = {
  maxLines: 3,
  fields: ['id', 'name', 'profession', 'age']
}


class File{
  static async csvToJson(filePath){
    const content = await readFile(filePath, "utf-8")
    console.log({content});
  }

  static isValid(csvString, options = DEFAULT_OPTION){

  }
}

module.exports = File