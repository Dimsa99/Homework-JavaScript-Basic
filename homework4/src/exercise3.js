function mySentence(){
    let result ="";
    let randomSentence=["Hello","there","students","of","SEDC"];
    let index = 0;
    while ( index < randomSentence.length){
        result += randomSentence[index];
        result += " ";
        index++;
    }
    console.log(result);
    
    // let sentence =["Hello","there","students","of","SEDC","!"];
    // console.log(`${sentence[0]} ${sentence[1]} ${sentence[2]} ${sentence[3]} ${sentence[4]} ${sentence[5]}`);

}

mySentence();