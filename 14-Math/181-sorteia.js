function getRandomNumber (inicio = 0, fim = 1, integer = true) {
    let r = (Math.random() * (fim - inicio + 1) + inicio).toFixed(2)
    return integer ? Math.floor(r) : r
}

let arr = []

for (let index = 0; index < 100; index++) {
    arr.push(getRandomNumber(2, 10, false))
}

arr = arr.filter(item => item < 3 || item > 9)

console.log(arr)
