let myArray = [];
function Animal(name,type,age){
    this.name = name;
    this.type = type;
    this.age = age;
    this.printFull = function(){
        console.log(`It's name is ${this.name}, it is a ${this.type} and it is ${this.age} years old`)
    }
}
let btn = document.getElementById("btn");
btn.addEventListener("click", function(){
    
})