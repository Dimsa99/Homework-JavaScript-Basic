let randomNum = [1,2,3,4,5]
function sumOfNumbers(array){
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        let addIndex = array[i];
        if(validateNumber(array[i]) == false){
            continue;
        }
        sum += addIndex;
       
    }
    console.log(`The numbers are ${array} and the their sum is ${sum}`);
    return sum;
    
}
sumOfNumbers(randomNum);



function validateNumber(num){
    if (typeof(num) == "number" ){
        console.log(num);
        return true;
        
    
    } else if (typeof(num) != "number"){
        console.log("Error!")
        return false;
    }
         
}
let randomNumbers=[1,2,3];
let randomStuff=[1,2,"blablabla"];

sumOfNumbers(randomStuff);

