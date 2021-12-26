let question = parseInt(prompt("Please enter your year so we can see your Chinese zodiac sign: "));
let zodiacCalculation = (question - 4) % 12;

switch (zodiacCalculation){
    case 0:
        alert(`Your Chinese Zodiac sign is: Rat!`);
        break;
    case 1:
        alert(`Your Chinese Zodiac sign is:${zodiacCalculation} =>Ox! `);
        break;
     case 2:
        alert(`Your Chinese Zodiac sign is:${zodiacCalculation} =>Tiger! `);
        break;
     case 3:
        alert(`Your Chinese Zodiac sign is:${zodiacCalculation} =>Rabbit! `);
        break;
    case 4:
        alert(`Your Chinese Zodiac sign is:${zodiacCalculation} =>Dragon! `);
        break;
    case 5:
        alert(`Your Chinese Zodiac sign is:${zodiacCalculation} =>Snake! `);
        break;
    case 6:
        alert(`Your Chinese Zodiac sign is:${zodiacCalculation} =>Horse! `);
        break;
    case 7:
        alert(`Your Chinese Zodiac sign is:${zodiacCalculation} =>Goat! `);
        break;
    case 8:
        alert(`Your Chinese Zodiac sign is:${zodiacCalculation} =>Monkey! `);
        break;
    case 9:
        alert(`Your Chinese Zodiac sign is:${zodiacCalculation} =>Rooster! `);
        break;
    case 10:
        alert(`Your Chinese Zodiac sign is:${zodiacCalculation} =>Dog! `);
        break;
    case 11:
        alert(`Your Chinese Zodiac sign is:${zodiacCalculation} =>Pig! `);
        break;
    default:
        alert("Invalid year!");    
}