function findNumbers(number, array) {
    let counter = 0;
    for (let i = 0; i < array.length; i++) {
        if (number === array[i]) {
            counter++;
        }

    }
    console.log(`The number ${number} appears ${counter} times`);
    return counter;
}
let numbers = [2, 4, 4, 5];
console.log(findNumbers(4, numbers));



function factoriel(n) {
    // if (n === 0) return 1;
    // return n * factoriel(n - 1);
    let res = 1;

    for (let i = 1; i <= n; i++) {
        res *= i;
    }
    // for (let i = n; i > 0; i--) {
    //     res *= i;
    // }
    return res;
}

console.log(factoriel(3));
console.log(factoriel(4));
console.log(factoriel(5));
console.log(factoriel(6));
