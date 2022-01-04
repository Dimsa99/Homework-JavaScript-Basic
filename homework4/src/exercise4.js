let a = 1;
let empty = "";
while(a >= 1 && a<=20){
    if (a % 2 ==0){
        empty += a;
        empty += "\n";
        //console.log(`${a} \n`);
    } else  {
        empty += a;
        empty += " ";
       // console.log(`\"\" `);
    } 
     a++;  

    
 }
 console.log(empty);