let arr = [2, 4, 8]

console.log(...arr)

function sum () {
    let total = 0
    for (let i = 0; i < arguments.length; i++) total += arguments[i]
    console.log(arguments) // it's an object!
    return `soma: ${total}`
}

console.log(sum(...arr))

arr.push(...[1, 3, 5])
console.log(arr)
