// The call method receives as parameters this, following by another parameters
// The apply method receives this and an array

(()=>{
    const meuArray = [1, 2, 3];

    const sumSpread = function () {
        const args = [...arguments];
        return args.reduce((total, current) => total + current);
    }

    const sumPrototype = function () {
        // I'm accessing the Array reduce method and calling it for arguments
        // Arguments isn't an array but I can call an array method that way.
        // The hardest part here is remember that the next call argument is a reduce function
        // Depending on the method I'm calling the parameters will change
        return Array.prototype.reduce.call(arguments, (total, current) => total + current, 0);
        // The last parameter is the first value of total
    }

    const sumES5 = function () {
        let total = 0;

        Array.prototype.forEach.call(arguments, argument => total += argument);
        return total;
    }

    // const sequentialSum = arr => (arr[0] + arr[arr.length - 1]) * arr[arr.length - 1] / 2;
    const sequentialSum = arr => {
        const last = arr[arr.length - 1];
        return (arr[0] + last) * last / 2
    };

    console.log('sumSpread', sumSpread(...meuArray));
    console.log('sequentialSum', sequentialSum([1, 100]))
    console.log('sumPrototype', sumPrototype(2, 3, 4, 1))
    console.log('sumES5', sumES5(2, 3, 4, 1))
})();
