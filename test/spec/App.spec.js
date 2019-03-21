const { expect } = require('chai')

describe('Calculator', () => {

    it('adds 2 numbers', () => {

        expect(Calculator.add(1, 2)).to.equal(3)
    })

})

const Calculator = {

    add (a, b) {
        return a + b
    }

}