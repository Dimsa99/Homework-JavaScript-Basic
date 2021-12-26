function myObject( carName, carCountry, carColor){
    console.log(`Your dream car is:${carName}, ${carCountry}, ${carColor} color`);
    console.log(typeof(carName));
    console.log(typeof(carCountry));
    console.log(typeof(carColor));
    // ne sum siguren dali ova e object mene mi e isto kako string nekako
}

function myBoolean(questionOne, questionTwo, questionThree){
    console.log(`You are over 18. ${questionOne}`);
    console.log(typeof(questionOne));

    console.log(`You are female. ${questionTwo}`);
    console.log(typeof(questionTwo));

    console.log(`You love animals. ${questionThree}`);
    console.log(typeof(questionThree));
}

function myBirthday( day, month, year){
    console.log(`day: ${day}, mm: ${month}, y: ${year}`);
    console.log(typeof(day));
    console.log(typeof(month));
    console.log(typeof(year));
}

function myAnimals(dog, seaAnimal, cat){
    console.log(`Favorite dog: ${dog}, favorite fish: ${seaAnimal}, favorite cat: ${cat}`);
    console.log(typeof(dog));
    console.log(typeof(seaAnimal));
    console.log(typeof(cat));


}

myObject("Mazda x3", "Japan", "Dark Red");
myBoolean(true, false, true);
myBirthday(22,07,1999);
myAnimals("Akita", "Dolphin");