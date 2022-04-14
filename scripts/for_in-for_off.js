const array = [4, 8, 3, 2]

const obj = {
    nome: 'Junior',
    classe: 'Fazendeiro',
    raca: 'humano'
}

for (const n of array) {
    console.log(n)
}

for (const prop in obj) {
    console.log(prop, ':', obj[prop])
}
