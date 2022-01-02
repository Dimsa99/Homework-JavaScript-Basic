function filterOddEven(array, type) {
    if (type !== "odd" && type !== "even") {
        return "Invalid type specified";
    }

    const tempArr = [];

    for (let i = 0; i < array.length; i++) {
        if (type === "odd") {
            // ODD
            if (array[i] % 2 !== 0) {
                tempArr.push(array[i]);
            }
        } else {
            // EVEN
            if (array[i] % 2 === 0) {
                tempArr.push(array[i]);
            }
        }
    }
    return tempArr;
}

const arr = [1, 2, 3, 4, 5, 6, 11, 0, -3, 77171];

console.log(filterOddEven(arr, "odd"))
console.log(filterOddEven(arr, "even"));
console.log(filterOddEven(arr, "1even"));