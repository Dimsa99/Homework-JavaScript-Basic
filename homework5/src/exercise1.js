let firstDiv = document.getElementById("myTitle").innerText="New Text";
let firstParagraph= document.getElementsByClassName("paragraph").innerText="New hard exercise";// ne znam ni vaka isto zasto nejke
// firstParagraph[1].innerText ="A new hard exercise"----> ne mi e jasno zasto vaka ne mi iskaca;
// let secondParagraph = document.getElementsByClassName("anotherDiv");
// secondParagraph.children[0].innerText = " asda sd"
// secondParagraph.children[1].innerText ="Also bla bla bla";
let secondParagraph = paragraphs[1];
secondParagraph += + "This is changed";
let lastDiv = document.querySelector("div")[2].firstChild.innerText="This is changed";

