var year = prompt("Please enter the year you want to see the Chinese zodiac sign of: ")
var parsedYear = parseInt(year);
console.log(parsedYear);
console.log(typeof(parsedYear));

var zodiacCalculation = (parsedYear -4) % 12;
console.log("This is the number of the year you wrote: "+zodiacCalculation);

if(zodiacCalculation == 0){
    console.log("The Chinese sign is Rat !");
} else if( zodiacCalculation == 1) {
    console.log("The Chinese sign is Ox!");
} else if(zodiacCalculation == 2 ){
    console.log("The Chinese sign is Tiger!");
} else if(zodiacCalculation == 3){
    console.log("The Chinese sign is Rabbit!");
} else if (zodiacCalculation == 4){
    console.log("The Chinese sign is Dragon!");
} else if (zodiacCalculation == 5){
    console.log("The Chinese sign is Snake!");
} else if (zodiacCalculation == 6){
    console.log("The Chinese sign is Horse!");
} else if (zodiacCalculation == 7){
    console.log("The Chinese sign is Goat!");
} else if (zodiacCalculation == 8){
    console.log("The Chinese sign is Monkey!");
} else if (zodiacCalculation == 9){
    console.log("The Chinese sign is Rooster");
} else if (zodiacCalculation == 10){
    console.log("The Chinese sign is Dog!");
} else if (zodiacCalculation == 11){
    console.log("The Chinese sign is Pig!");
} else {
    console.log("You have written a made up year, please write correctly :)");
}