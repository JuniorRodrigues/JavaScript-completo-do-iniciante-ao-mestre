let arr = new Array(1, 2, 3)
console.log(arr)

const arrayFrom = Array.from(arr)
arrayFrom.push(4, 5)
console.log(arrayFrom)

const arrayOf = new Array(3)
console.log(arrayOf, 'length:', arrayOf.length)

const arrayOf2 = Array.of(3)
console.log(arrayOf2, 'length:', arrayOf2.length)
