const Service = require("./service")
const assert = require('assert')
const BASE_URL_1 = 'https://swapi.dev/api/planets/1/'
const BASE_URL_2 = 'https://swapi.dev/api/planets/2/'
const { createSandbox } = require('sinon');
const sinon = createSandbox();


const mocks = {
  alderaan: require('./../mocks/alderaan.json'),
  tatooine: require('./../mocks/tatooine.json')
}

;(async ()=> {
  {
    /* Trecho que consome API (pode ser custoso, dependendo do contexto)
    const service = new Service();
    const dados = await service.makeRequest(BASE_URL_2)
    console.log(JSON.stringify(dados));
    */

    const service = new Service()
    const stub = sinon.stub(
      service,
      service.makeRequest.name
    )

    stub.withArgs(BASE_URL_2).resolves(mocks.alderaan)
    stub.withArgs(BASE_URL_1).resolves(mocks.tatooine)

    {
     const expected = {
      name: "Tatooine",
      surfaceWater: "1",
      appeardIn: 5
     }

     const results = await service.getPlanets(BASE_URL_1)
     assert.deepStrictEqual(results, expected)
    }
  }
})()