const { error } = require("./src/constantes");
const File = require("./src/file");
const assert = require('assert')
;(async () => {

  //variaveis criadas neste bloco so sao validas durante sua execucao
  {
    const filePath = './mocks/emptyFile-invalid.csv'
    const expected = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
    const result = File.csvToJson(filePath)
    await assert.rejects(result, expected)
  }
})()