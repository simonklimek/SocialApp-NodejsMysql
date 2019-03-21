const { expect } = require('chai')

const Validator = require('../../routes/validation/Validator')

describe('Validator', () => {

    it('can apply a rule', () => {
        const rules = {
            email: v => /@/.test(v)
        }

        const validResult = Validator.validate({
            email: 'asd@asd.com'
        }, rules)

        const invalidResult = Validator.validate({
            email: 'asdas'
        }, rules)

        expect(validResult).to.be.true
        expect(invalidResult).to.be.false
    })

    it('can apply multiple rules', () => {
        const rules = {
            email: v => /@/.test(v)
        }

        const validResult = Validator.validate({
            email: 'asd@asd.com'
        }, rules)

        const invalidResult = Validator.validate({
            email: 'asdas'
        }, rules)

        expect(validResult).to.be.true
        expect(invalidResult).to.be.false
    })
    
})
