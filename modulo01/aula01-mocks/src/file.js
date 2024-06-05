const {readFile} = require('fs/promises')
const { error } = require('./constantes')
const DEFAULT_OPTION = {
  maxLines: 3,
  fields: ["id","name","profession","age"]
}
class File {
  static async csvToJson(filePath){
    const content = await readFile(filePath, "utf8")
    const validation = this.isvalid(content)
    if(!validation.valid) throw new Error(validation.error)
  }

  static isvalid(csvString, options = DEFAULT_OPTION) {
    //para ver o conteudo do arquivo
    // fs.readFileSync('./mocks/threeItems-valid.csv', 'utf8')
    const [headers, ...fileWithoutHeader] = csvString.split(/\r?\n/)
    if(!fileWithoutHeader.lenght){
      return {
        error: error.FILE_LENGTH_ERROR_MESSAGE,
        valid: false
      }
    }
    console.log(headers,fileWithoutHeader);
  }
}

module.exports = File