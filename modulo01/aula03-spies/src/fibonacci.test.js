//Fibonacci: o proximo numero da sequencia eh sempre a soma da sequencia dos anterioes
//input 3
// 0, 1, 2
//input 5
// 0, 1, 1, 2, 3

const { createSandbox} = require('sinon');
const Fibonacci = require('./fibonacci');

const sinon = createSandbox();

const fibonacci = new Fibonacci()
;(async () => {
    {
        // numero de sequencia
        for(const sequencia of fibonacci.execute(5)){
            console.log({sequencia});
        }
    }
})()