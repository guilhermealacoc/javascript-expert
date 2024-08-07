//Fibonacci: o proximo numero da sequencia eh sempre a soma da sequencia dos anterioes
//input 3
// 0, 1, 2
//input 5
// 0, 1, 1, 2, 3

const { createSandbox} = require('sinon');
const Fibonacci = require('./fibonacci');
const sinon = createSandbox();
const assert  = require('assert')


;(async () => {
    {
        const fibonacci = new Fibonacci()
        const spy = sinon.spy(
            fibonacci,
            fibonacci.execute.name
        )
        for(const sequencia of fibonacci.execute(5)){ }
        const expectedCallCount = 6
        assert.strictEqual(spy.callCount ,expectedCallCount)
        const { args } = spy.getCall(2)
        
        const expectedParams = [ 3, 1, 2 ]
        assert.deepStrictEqual(args, expectedParams, "Os arrays nao sao iguais")
        
        {
        const fibonacci = new Fibonacci()
        const spy = sinon.spy(
            fibonacci,
            fibonacci.execute.name
        )
        const results = [...fibonacci.execute(5)]
        const expectedCallCount = 6
        assert.strictEqual(spy.callCount ,expectedCallCount)
        const { args } = spy.getCall(2)
        
        const expectedParams = [ 3, 1, 2 ]
        assert.deepStrictEqual(args, expectedParams, "Os arrays nao sao iguais")

        const expectedResults = [0,1,1,2,3]
        assert.deepStrictEqual(results, expectedResults, "Os arrays nao sao iguais")
        
    }
    }
})()



