const { isArrayWithLength, convertArrayToMap } = require('../src/arrayUtils')

describe('arrayUtils', function() {
    describe('isArrayWithLength', function() {
        it('should return true for arrays that are valid and have length', function() {
            const testArr = []
            testArr.push(1)
            expect(isArrayWithLength(testArr)).toBeTruthy()
        })
        it('should return false when array is valid but has no length', function() {
            const testArr = []
            expect(isArrayWithLength(testArr)).toBeFalsy()
        })
        it('should return false when array is null', function() {
            const testArr = null
            expect(isArrayWithLength(testArr)).toBeFalsy()
        })
        it('should return false when array is undefined', function() {
            const testArr = undefined
            expect(isArrayWithLength(testArr)).toBeFalsy()
        })
    })
    describe('convertArrayToMap', function() {
        it('should throw an error when passed array is undefined', function() {
            expect(convertArrayToMap).toThrowError(
                new Error('array is not valid')
            )
        })
        it('should throw an error when passed array has no length', function() {
            const testArr = []
            expect(convertArrayToMap).toThrowError(
                new Error('array is not valid')
            )
        })
        it('should correct map with items from list', function() {
            const testArr = [1, 5, 'Criss', 'Paola', true, 'Criss', false]
            const resultMap = convertArrayToMap(testArr)
            const expectedResult = {
                1: 1,
                5: 5,
                Criss: 'Criss',
                Paola: 'Paola',
                true: true,
                false: false
            }
            expect(resultMap).toEqual(expectedResult)
        })
    })
})
