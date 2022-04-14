(() => {
    Function.prototype.addMethod = function (name, fn) {
        this.prototype[name] = fn;
        return this
    }

    String.addMethod('primeiraLetra', function () {
        return this[0].toUpperCase()
    })

    String.addMethod('trataNome', function () {
        let result = this.replace(/^\s+|\s+$/g, '')

        const regex = /^([a-z])/g
        const firstLetter = (result.match(regex)).toString().toUpperCase()

        result = result.replace(regex, firstLetter)

        return `>${result}<`
    })
})();

const result = ('junior ').trataNome()
console.log(result)
