(() => {
    let arr = [4, 5, 10, 20, 35, 4, 5]
    console.log(arr, `Array items = ${arr.length}`)
    console.log('[ 0, 1,  2,  3,  4, 5, 6 ]')

    // .indexOf() searches for the value from the beginning to the end of the array, and returns its index
    // Sintaxe: array.indexOf(elementoDePesquisa, [pontoInicial = 0])
    console.log('\n.indexOf()')
    console.log( arr.indexOf(5) )
    console.log( arr.indexOf('a'), arr.indexOf('a') > -1 )

    // .lastIndexOf() returns the value from the end to the beginning of the array, and returns its index
    console.log('\n.lastIndexOf()')
    console.log( arr.lastIndexOf(5) )

    // .find() receives a callback and returns the corresponding value within the array, otherwise it returns undefined
    console.log('\n.find()')
    console.log(arr.find(vl => vl > 10))

    // .findIndex() receives a callback and returns the corresponding index that matches
    console.log('\n.findIndex()')
    console.log( arr.findIndex( vl => vl > 5) )
})();
