let animal = new Object();
animal.name = "Dog";
animal.kind = "Akita";
animal.speak = function(){
        alert(`${animal.name} says: Hey bro!`); // zaso funkcijava ne mi raboti?
}

console.log(`My ${animal.name} is an ${animal.kind} `);