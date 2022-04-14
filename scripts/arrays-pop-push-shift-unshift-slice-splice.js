let arr = [1, 3, 9, 12, 16]

// .unshift() method insert new elements at the start of the array and returns its length
let arrayUnshift = arr.unshift('primeiro', 'segundo')
console.log('\n.unshift()')
console.log('arrayUnshift =', arrayUnshift)
console.log(arr)

// .push() method insert new elements at the End of the array and returns its length
let arrayPush = arr.push('penultimo', 'ultimo')
console.log('\n.push()')
console.log('arrayPush =', arrayPush)
console.log(arr)

// .pop() method removes the last element from an array and returns it
let lastItem = arr.pop()
console.log('\n.pop()')
console.log('lastItem =', typeof lastItem, lastItem)
console.log(arr)

// .shift() method removes the start element from an array and returns it
let firstItem = arr.shift()
console.log('\n.shift()')
console.log('firstItem =', typeof firstItem, firstItem)
console.log(arr)

// .slice() method receives where the slice starts and ends, then returns an array containing these values
let arraySlice = arr.slice(1, 6)
console.log('\n.slice()')
console.log('arraySlice =', arraySlice)
console.log(arr)

let sliceStartFrom = arr.slice(2)
console.log('\nsliceStartFrom =', sliceStartFrom)
console.log(arr)

let sliceLastItems = arr.slice(-2)
console.log('\nsliceLastItems =', sliceLastItems)
console.log(arr)

// .splice() modifies the original array, it receives 3 arguments (startCrop, endCrop, newValues) and returns the removed elements
// if we pass to it just one argument, it starts removing from that index
let arraySplice = arr.splice(2)
console.log('\narraySplice =', arraySplice)
console.log(arr)
