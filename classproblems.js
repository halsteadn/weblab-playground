document.write("<h4> Making Change in Cash</h4>");

var makeChange = function(amount)   {
    var change = {};
    
    //convert to pennies to make the math easier

    amount *= 100;
    while(amount > 0)   {
        //calculate hundreds
        if(amount >= 10000) {
            change.hundreds = parseInt(amount / 5000);
            amount -= change.hundreds * 10000;
        }
        else if(amount >= 5000) {
            change.fifties = parseInt(amount / 5000);
            amount -= change.fifties * 5000;    
        }
        else if(amount >= 1000) {
            change.tens = parseInt(amount / 1000);
            amount -= change.tens * 1000;
        }
        else if(amount >= 500) {
            change.fives = parseInt(amount / 500);
            amount -= change.fives * 500;            
        }
        else (amount >= 100)  {
            change.ones = parseInt(amount / 100);
            amount -= change.ones * 100;
        }
}
return change