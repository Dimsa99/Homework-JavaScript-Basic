// function myPuppy(myDogYear){
//     let dogAgeInHumanYears = myDogYear * 7;
//     console.log(`Your dogs year is: ${dogAgeInHumanYears} in human years!`);
//     return dogAgeInHumanYears;
// }
// function humanToDog(humanYear){
//     let humanToDogYears = humanYear / 7;
//     console.log(`You are: ${humanToDogYears} years old in dog years!`);
//     return humanToDogYears;
// }

// function bothConversions(dogYear, humanAge){
//     let dogAgeInHumanYears = dogYear * 7;
//     console.log(`Your dog is: ${dogAgeInHumanYears} years old in human years!`);

//     let humanYearsInDogYears = humanAge / 7;
//     console.log(`You are: ${humanYearsInDogYears} years old in dog years!`);
    
// }
// myPuppy(6);
// humanToDog(85);
// bothConversions(3,15);
let question = +prompt("Please enter 1 for converting Dog to Human years and 2 for Human to dog years.");
let questionTwo = +prompt("Please enter the year you wanna convert");
let dogToHuman = questionTwo * 7;
let humanToDog = questionTwo / 7;
function conversion(){
    if (question == 1){
        console.log(`Your dog's age is: ${dogToHuman} in Human years!`)
    } else if ( question == 2 ){
        console.log(`Your age is: ${humanToDog} in dog years!`);
    } else {
        console.log("Invalid number.");
    }
}
conversion();