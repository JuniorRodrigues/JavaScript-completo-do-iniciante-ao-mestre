let arr = [1, 2, 3, 4]

// Reverse change the order of an array (reverse it) and returns the same array
console.log(arr.reverse())

// .reduce() method it can receive 4 parameters (acumulator, currentValue, index, _arr), and returns a unique value
const soma = arr.reduce((acumulator, currentValue) => acumulator + currentValue)
console.log(soma)

const soma2 = arr.reduce((acumulator, currentValue, i, _arr) => {
    return acumulator + currentValue
}, 0) // acumulator starts with 0
console.log(soma2)

const nomes = ['Daniel', 'Maria', 'Joana', 'João']
let nomesPorOrdem = nomes.reduce( (acumulador, currentValue) => {
    let primeiraLetra = currentValue[0] // it's possible to get the first letter, because strings are arrays

    if (acumulador[primeiraLetra]) {
        acumulador[primeiraLetra]++
    } else {
        acumulador[primeiraLetra] = 1
    }
    return acumulador
}, {})

console.log(nomesPorOrdem)
