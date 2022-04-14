const numeros = [1, 3, 4, 1, 4, 5, 3 , 5, 8, 9]

// retornar através do método reduce, um array com números únicos, recebe dois parâmetros
let numerosUnicos = numeros.reduce((acumulador, currentValue) => {
    if (acumulador.indexOf(currentValue) < 0) acumulador.push(currentValue)
    return acumulador
}, [])

console.log(numerosUnicos)
