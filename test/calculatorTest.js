const assert = require('chai').assert
const app = require('../calculator')

// Results
addResult = app.add(5,2)
mulResult = app.mul(5,2)
divResult = app.div(10,2)
subResult = app.sub(5,2)

// Calculator Tests
describe('Calculator Tests', () => {
    // Addition Tests
    describe('Addition', () => {
        it('Should add two values', () => {
            assert.equal(addResult, 7)
            console.log("Addition Passed...")
        })
    
        it('Should fail to add two values (Negative Test)', () => {
            assert.equal(addResult, 8)
            console.log("Addition Failed...")
        })
    })

    // Multiplication Tests
    describe('Multiply', () => {
        it('Should multiply two values', () => {
            assert.equal(mulResult, 10)
            console.log("Multiplication Passed...")
        })
    
        it('Should fail to multiply two values (Negative Test)', () => {
            assert.equal(mulResult, 12)
            console.log("Multiplication Failed...")
        })
    })

    // Division Tests
    describe('Division', () => {
        it('Should divide two values', () => {
            assert.equal(divResult, 5)
            console.log("Division Passed...")
        })
    
        it('Should fail to divide two values (Negative Test)', () => {
            assert.equal(divResult, 2)
            console.log("Division Failed...")
        })
    })

    // Subtraction Tests
    describe('Subtraction', () => {
        it('Should subtract two values', () => {
            assert.equal(subResult, 3)
            console.log("Subtraction Passed...")
        })
    
        it('Should fail to subtract two values (Negative Test)', () => {
            assert.equal(subResult, 5)
            console.log("Subtraction Failed...")
        })
    })
})