let firstDiv = document.getElementById("myTitle");
console.log(firstDiv.innerText);
firstDiv.innerText="New title";
let firstParagraph= document.querySelector(".paragraph");
console.log(firstParagraph.innerText);
firstParagraph.innerText="This is a new exercise, it's pretty hard";
let secondParagraph = document.getElementsByClassName('second')[0];
console.log(secondParagraph);
secondParagraph.innerText = "A new text from myself!"
document.querySelector("text").innerText = "bla bla bla";
let lastDiv = document.getElementsByTagName("body")[0];
let firstHeader = lastDiv.getElementsByTagName("h1");
firstHeader.innerText = "Now i also changed this !";// samo ova ne mi funkcionira i stvarno ne znam zasto
let secondHeader = lastDiv.getElementsByTagName("h3")[0];
secondHeader.innerText = "Hehe this is also changed";








