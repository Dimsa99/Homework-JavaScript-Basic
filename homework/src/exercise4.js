let girls= +prompt("Please enter the number of girls in your class");
let boys = +prompt("Please enter the number of boys in your class");
function girlsAndBoys(){
    if( girls < 10 && boys < 10){
        console.log(`You have: 0${girls} girls in your class and 0${boys} boys in your class`);
     } else if (girls <10 && boys >=10){
        console.log(`You have: 0${girls} and ${boys} boys in your class`);
    } else if(girls >=10 && boys <10){
        console.log(`You have: ${girls} and 0${boys} boys in your class`);
    }
    else {
        console.log(`You have: ${girls} girls in your class`);
        console.log(`You have: ${boys} boys in your class `);
    }
}
girlsAndBoys();

