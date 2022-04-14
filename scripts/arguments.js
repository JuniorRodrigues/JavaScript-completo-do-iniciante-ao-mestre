'use strict'

function sum () {
    let total = 0;

    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] !== 'number') {
            throw Error('A função aceita apenas números')
        }
        total += arguments[i]
    }

    return total
}

try {
    console.log(sum(2, 2, 2))
} catch (error) {
    console.log(`Erro: ${error.message}`)
}

console.log(sum.name)
