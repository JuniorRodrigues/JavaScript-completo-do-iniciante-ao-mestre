// O QUE VIMOS
//     Spread operator ...
//     Loop for of vs for in
//     destructuring

// ATIVIDADE
//     Criar as funções
//         sum()
//         averege()

//     Regras
//         • pode receber varios parametros
//         • retorna um número

// SUM
function sumForOf () {
    let total = 0;
    for (el of arguments) total += el;

    return total;
}

function sumForIn () {
    let total = 0;
    for (const prop in arguments) total += arguments[prop];

    return total;
}

function sumReduce () {
    const args = Array.from(arguments);
    return args.reduce((a, b) => a + b);
}

console.log(sumForOf(2, 2, 2))
console.log(sumForIn(2, 2, 2))
console.log(sumReduce(2, 2, 2))

const numbersToSum = [3, 2, 4];

// Spread Operator
console.log('\nSpread Op', sumReduce(...numbersToSum, 1));

// Destructuring
const [n1, n2] = numbersToSum;
console.log('\nDestructuring', sumReduce(n1, n2));

const [, n3, n4] = numbersToSum;
console.log('\nDestructuring', sumReduce(n3, n4));

const [n5, , n6] = numbersToSum;
console.log('\nDestructuring', sumReduce(n5, n6));


// AVERAGE
const average = function () {
    const args = Array.from(arguments);
    return (args.reduce((a, b) => a + b) / args.length).toFixed(2);
}

console.log('Average', average(1, 5, 10))

const averageForOf = function () {
    const total = sumReduce(...arguments);
    return (total / arguments.length).toFixed(2);
}

console.log('Average ForOf', averageForOf(1, 5, 10))
