let car = {
    model:"Mazda",
    color:"Red",
    year: 2016,
    fuelConsumption:7
    

}
function calculate(myFuel){
    let distance = prompt("Please enter the distance in km");
    let calculation = myFuel.fuelConsumption / distance * 100;
    console.log(`You will need: ${calculation} liters for your distance`);

}
calculate(car);