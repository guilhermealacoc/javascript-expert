const { readFile} = require('fs/promises')

const DEFAULT_OPTION = {
  maxLines: 3,
  fields: ['id','name','profession','age']
}

class File {
  static async csvToJson(filePath){
    const content = await readFile(filePath, "utf8")
    console.log({content});
  }

  static isValid(csvString, options = DEFAULT_OPTION){
    csvString.split(/\r?\n/)
  }
}

module.exports = File

/**
 * para poder visualizar o conteudo de um arquivo eh possivel fazer diretamente no console 
 * rodar node (abre console node)
 * rodar fs.readFileSync('./mocks/threeItems-invalid.csv', 'utf8')
 * 
 */