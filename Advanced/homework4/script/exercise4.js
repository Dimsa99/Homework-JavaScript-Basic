function factoriel(num){
    console.log(`Input is: ${num}`);
    if( num == 1){
        return 1;
    }
    else{
        console.log(`return ${num} * factoriel (${num-1})`);
        return num * factoriel(num-1);
        
    }
}
let result = factoriel(5);
console.log(result);