const File = require("./src/file")
const {error} = require("./src/constants")
const assert = require('assert')

;(async () => {
  {
    const filePath = './mocks/emptyFile-invalid.csv'
    const expected = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
    const result = File.csvToJson(filePath)
    await assert.rejects(result, expected)
  }
})()

/*
Toda variavel criada dentro de {} na IFEE acima "morre" morre logo apos a execucao, permitindo replicar o nome no escopo sem erros.
*/