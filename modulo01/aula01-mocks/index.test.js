const { error } = require("./src/constantes");
const File = require("./src/file");
const assert = require("assert");
(async () => {
  //variaveis criadas neste bloco so sao validas durante sua execucao
  {
    const filePath = "./mocks/emptyFile-invalid.csv";
    const expected = new Error(error.FILE_LENGTH_ERROR_MESSAGE);
    const result = File.csvToJson(filePath);
    await assert.rejects(result, expected);
  }

  {
    const filePath = "./mocks/invalid-header.csv";
    const expected = new Error(error.FILE_FIELDS_ERROR_MESSAGE);
    const result = File.csvToJson(filePath);
    await assert.rejects(result, expected);
  }

  {
    const filePath = "./mocks/fiveItems-invalid.csv";
    const expected = new Error(error.FILE_LENGTH_ERROR_MESSAGE);
    const result = File.csvToJson(filePath);
    await assert.rejects(result, expected);
  }

  {
    const filePath = "./mocks/threeItems-valid.csv";
    const expected = [
      {
        id: 1,
        name: "jose",
        profession: "manager",
        age: 30,
      },
      {
        id: 2,
        name: "silva",
        profession: "developer",
        age: 22,
      },
      {
        id: 3,
        name: "mario",
        profession: "sales",
        age: 41,
      },
    ];
    const result = await File.csvToJson(filePath);
    assert.deepEqual(result, expected);
  }
})();
