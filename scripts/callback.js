(()=> {
    function calculaImc (peso, altura, fx) {
        let msg = ''

        if (arguments.length < 2) msg += '\nError: This function needs two params: weight and hight respectively. '
        if ( (typeof peso !== 'number') || (typeof altura !== 'number') ) msg += '\nError: Only numbers'
        if (msg) throw Error(msg)

        let imc = parseFloat((peso / altura ** 2).toFixed(2))

        if (typeof fx === 'function') return fx(imc)
        return imc
    }

    function classificaImc (imc) {
        switch (true) {
            case (imc <= 16.9):
                return imc + ' Muito abaixo do peso'
            case (imc < 18.4):
                return imc + ' Abaixo do peso'
            case (imc <= 24.9):
                return imc + ' Peso normal'
            case (imc <= 29.9):
                return imc + ' Sobrepeso'
            case (imc <= 34.9):
                return imc + ' Obesidade Grau 1'
            case (imc <= 40):
                return imc + ' Obesidade Grau 2'
            default:
                return imc + ' Obesidade Grau 3'
        }
    }

    const peso = 70.8
    const altura = 1.66

    try {
        let meuImc = calculaImc(peso, altura, classificaImc)
        console.log(meuImc)
    } catch (error) {
        console.log(`${error.message}`)
    }
})();
