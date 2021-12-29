function ageCalculator(yourYear){
    const currentYear= new Date().getFullYear();
    const yourAge = currentYear - yourYear;
    console.log(`Current year is: ${currentYear}, your birth year is: ${yourYear} and your age is: ${yourAge}`);

}
ageCalculator(1985);
ageCalculator(1859);
ageCalculator(2000);
