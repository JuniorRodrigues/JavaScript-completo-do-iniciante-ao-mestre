(function () {
    function exibe (x) {
        console.log(x)
    }

    function calculaMedia () {
        let total = 0
        let qtArgs = arguments.length

        for (var i = 0; i < qtArgs; i++) {
            if (typeof arguments[i] !== 'number') throw Error('A função aceita apenas números')
            total += arguments[i]
        }

        return (total / qtArgs) || 0
    }

    try {
        exibe(calculaMedia())
    } catch (error) {
        exibe(`Erro: ${error.message}`)
    }
})()
