
function sumOfNumbers(){
    let randomNumbers =[5,25,3,14,10];
    let sum = randomNumbers[0] + randomNumbers[1] + randomNumbers[2] + randomNumbers[3] + randomNumbers[4];
    console.log(sum);
    return sum;
}
sumOfNumbers();

function validateNumbers(){
    let randomWords = [5,25,"Kniga", null, 10,"Dog"];
    if(randomWords === Number){
        console.log(randomWords);
        return randomWords;
    } else {
        console.log("Error!")
    }
}
validateNumbers(); // bonusot ne znam kako