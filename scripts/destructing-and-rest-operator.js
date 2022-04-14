const arr1 = [10, 20, 30]
const arr2 = [40, 50, 60]

// Destruction
const [n1, n2] = arr1
const [ , , n3] = arr1 // here we're ignoring first parameters
console.log(n1, n2, n3)

const [n4, ...n5] = arr2 // rest operator
console.log(n4)
console.log(n5)
