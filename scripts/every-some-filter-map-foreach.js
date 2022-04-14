const arr = [1, 5, 10, 'olá', true, false]
const arrString = ['onions', 'cucumbers', 'letuce', 'carrot']


// The array Every method returns true if each of the value within the array matches
const everyString = arr.every((el) => typeof el === 'string')
console.log(`Every: Is everything a string? ${everyString}`)


// The array Some method returns true if there is some match value
const someNumber = arr.some( (el) => typeof el === 'number')
console.log(`Some: Is there any number? ${someNumber}`)


// The array Filter method can receives 3 parameters (Element, Index and an Array) and returns an array containing the values that match
const filterCB = (vl, testedType) => typeof vl === testedType

const numeros  = arr.filter((vl, i, _arr) => filterCB(vl, 'number'))
const strings  = arr.filter(vl => filterCB(vl, 'string'))
const booleans = arr.filter(vl => filterCB(vl, 'boolean'))

console.log(`\nFilter: ${numeros}`)
console.log(`Filter: ${strings}`)
console.log(`Filter: ${booleans}\n`)


// The array Map method create a new array containing the created changes and receives a function with 3 parameters (Element, Index and an Array)
const newArr = numeros.map((el, i, _arr) => el * el)
console.log(`MAP`)
console.log(`before:`, numeros)
console.log('after:', newArr)
console.log('\n')


// ForEach is a loop such as For. It receives a function with an element, an index and an array.
arr.forEach((el, i, _arr) => console.log('forEach:', el, i))
