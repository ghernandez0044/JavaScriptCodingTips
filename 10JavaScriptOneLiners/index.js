// 10 JavaScript One Liners

// 1. Remove Duplicates From An Array
const array = ['a', 1, 2, 3, 'a', 'a']
const uniqueArray = [... new Set(array)]
console.log('uniqueArray: ', uniqueArray)

// 2. Generate A Random String
const randomString = Math.random().toString(36).slice(2)
console.log('randomString: ', randomString)

// 3. Remove falsy Values From An Array
const array2 = [0, 'a string', NaN, 5, true, undefined, false]
const removeFalsyValues = (arr) => arr.filter(Boolean)
console.log('removeFalsy: ', removeFalsyValues(array2))

// 4. Flatten An Array
