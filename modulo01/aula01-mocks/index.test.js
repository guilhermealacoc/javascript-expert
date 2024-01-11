const { error } = require("./src/constants")
const File = require("./src/file")
const assert = require('assert')

//IFEE
;(async () => {
  //variaveis criadas nesse bloco, só são validas durante sua execução
  {
    const filePath = './mocks/emptyFile-invalid.csv'
    const expect = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
    const result = File.csvToJson(filePath)
    await assert.rejects(result, expect)
  }

  {
    const filePath = './mocks/invalid-header.csv'
    const expect = new Error(error.FILE_FIELDS_ERROR_MESSAGE)
    const result = File.csvToJson(filePath)
    await assert.rejects(result, expect)
  }

  {
    const filePath = './mocks/fiveItems-invalid.csv'
    const expect = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
    const result = File.csvToJson(filePath)
    await assert.rejects(result, expect)
  }

  {
    const filePath = './mocks/threeItems-valid.csv'
    const expect = [
      {
        id: 1,
        name: "guilherme",
        profession: "developer",
        age: 23
      },
      {
        id: 2,
        name: "jose",
        profession: "driver",
        age: 40
      },
      {
        id: 3,
        name: "maria",
        profession: "nurse",
        age: 29
      }
    ]
    const result = await File.csvToJson(filePath)
    assert.deepEqual(result, expect)
  }
})()