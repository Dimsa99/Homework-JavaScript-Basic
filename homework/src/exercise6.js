let totalCash = +prompt("How much money you have on your bank account?");
let cashWithdraw = +prompt("How much money you wanna withdraw?");
let moneyLeft = totalCash - cashWithdraw;
function calculateMoney(){
    if(totalCash >= cashWithdraw){
        console.log(`You had: ${totalCash} money in your bank, you withdraw: ${cashWithdraw} and you now have: ${moneyLeft} money left in your bank account.`);

    } else{
        console.log("Not enough money.")
    }
    
}
calculateMoney();