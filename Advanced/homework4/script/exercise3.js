let firstName = ["Johny","Jack","Mario","Robert","Jackie"];
let lastName = ["Brown","Hopper","Bravo","Depp","DiCaprio"];
for(let i = 0; i < 5;i++){
    let first = firstName[i];
    let last = lastName[i];
    (function(first,last){
        console.log(first +" "+ last);
    })(first,last);
}
