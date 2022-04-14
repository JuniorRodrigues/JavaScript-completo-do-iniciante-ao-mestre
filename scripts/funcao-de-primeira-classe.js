function fn1 (n1) {
    fn1.count++
    return function fn2 (n2) {
        return n1 * n2
    }
}

fn1.count = 0;

const funcaoExterna = fn1(10)
const funcaoInterna = funcaoExterna(2)

console.log(`A função fn1 executou ${fn1.count} vez`)
console.log(`A multiplicação entre o parametro da fn1 e fn2 é igual à ${funcaoInterna}`)

const novaFuncao = fn1(4)
console.log(`\nAo utilizar os parênteses mesmo na atribuição de uma função ela será executada
agora fn1 foi executada: ${fn1.count} vezes`)
