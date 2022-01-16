let input = +prompt("Please write the weight in kg");

function chicken(sum){
    let suma = sum/2;
    return suma;
}
let chickenSum = chicken(input);
let paragraph = document.getElementById("paragraph");
let newParagraph = document.createElement("div");
newParagraph.setAttribute("class","myDiv");
paragraph.appendChild(newParagraph);
paragraph.innerText = `You have ${chickenSum}`;

    
