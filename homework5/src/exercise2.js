let first = ["Bob", "Jill"];
let last = ["Gregory", "Wurtz"];
function students(firstNameArray, lastNameArray) {
    const result = [];
    for (let i = 0; i < firstNameArray.length; i++) {
        result.push(
            `${i + 1}. ${firstNameArray[i]} ${lastNameArray[i]}`
        );
    }
    return result;
}

console.log(students(first, last));