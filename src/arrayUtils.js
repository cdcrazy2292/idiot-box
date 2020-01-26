/**
 * method that checks if an array is valid and its length is greater than 0
 * @param array
 * @returns {boolean}
 */
const isArrayWithLength = array => {
    return Boolean(Array.isArray(array) && array.length)
}

/**
 * method that converts a list/array into a map
 *
 * NOTE:
 *     duplicates in array will be removed when the it becomes a map
 * @param array
 * @throws Error
 */
const convertArrayToMap = array => {
    const map = {}
    if (isArrayWithLength(array)) {
        array.forEach(each => {
            map[each] = each
        })
    } else {
        throw new Error('array is not valid')
    }
    return map
}

// Exporting public methods
module.exports = {
    isArrayWithLength: isArrayWithLength,
    convertArrayToMap: convertArrayToMap
}
