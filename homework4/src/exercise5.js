let numbersArray = [3,5,6,8,11];
function minAndMaxValue(inputArray){
    let counter = 0;
    let max = -Infinity;
    let min = +Infinity;
    let sum = 0;

    while(counter < inputArray.length){
        console.log(`counter ${counter}`);
        console.log(`inputArray[${counter}]: ${inputArray[counter]}`);
        if(inputArray[counter] > max){
            max = inputArray[counter];
        } 
        if (inputArray[counter] < min){
            min = inputArray[counter];
        }
        console.log("max" + max);
        console.log("min" +min);
        sum = sum + inputArray[counter];
        counter++;
        
    }
    return sum;
    
}

let minAndMaxNumbers = minAndMaxValue(numbersArray);
console.log(minAndMaxNumbers);