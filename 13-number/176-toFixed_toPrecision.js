let numero = 1234567.890
console.log(typeof numero, '\n')

console.log(numero.toFixed(5))
console.log(typeof numero.toFixed(5), '\n')

console.log(numero.toPrecision(7))
console.log(typeof numero.toPrecision(7), '\n')

console.log((123).toPrecision(6))
console.log(typeof (123).toPrecision(6), '\n')

console.log(numero.toExponential()) // o numero elevado a 10
console.log(numero.toExponential(4)) // com 4 casas decimais
