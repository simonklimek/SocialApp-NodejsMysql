// const { expect } = require('chai');
const assert = require('chai').assert;

const authMiddleware = require("../../routes/authMiddleware");

describe('Passport Authentication', () => {
    it('funciton need to be defined', () => {
        let result = authMiddleware();
        assert.isDefined(result, 'is defined');
        // assert.equal(result, 'undefined string');
    });
});

    // npm run test
    
//     // it('is execured', () => {

//     //     expect(Calculator.add(1, 2)).to.equal(3)
//     // })

