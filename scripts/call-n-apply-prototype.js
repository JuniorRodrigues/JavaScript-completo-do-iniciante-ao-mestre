function sum () {
    return Array.prototype.reduce.call(arguments, (a, b) => a + b);
}

function average () {
    return (sum.apply(null, arguments) / arguments.length).toFixed(2);
}

console.log(sum(2, 4, 8))
console.log(average(2, 4, 8))
