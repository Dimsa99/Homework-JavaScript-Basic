alert("Hi, please enter 5 random numbers :)")
var num1 = prompt("Number one: ")
var parsedNum1 = parseInt(num1);
console.log(parsedNum1);

var num2 = prompt("Number two: ");
var parsedNum2 = parseInt(num2);
console.log(parsedNum2);

var num3 = prompt("Number three: ");
var parsedNum3 = parseInt(num3);
console.log(parsedNum3);

var num4 = prompt("Number four: ");
var parsedNum4 = parseInt(num4);
console.log(parsedNum4);

var num5 = prompt("Number five: ");
var parsedNum5 = parseInt(num5);
console.log(parsedNum5);

if(parsedNum1 > parsedNum2 && parsedNum1 >parsedNum3 && parsedNum1> parsedNum4 && parsedNum1> parsedNum5){
    alert("The highest number is: "+parsedNum1);
} else if ( parsedNum2 > parsedNum1 && parsedNum2 > parsedNum3 &&  parsedNum2 > parsedNum4 && parsedNum2 > parsedNum5){
    alert("The highest number is: " +parsedNum2);
} else if (parsedNum3 > parsedNum1 && parsedNum3 > parsedNum2 && parsedNum3 > parsedNum4 && parsedNum3 > parsedNum5){
    alert("The highest number is: "+ parsedNum3)
} else if (parsedNum4 > parsedNum1 && parsedNum4 > parsedNum2 && parsedNum4 > parsedNum3 && parsedNum4 > parsedNum5){
    alert("The highest number is: "+ parsedNum4);
} else {
    alert("The highest number is: "+parsedNum5);
}