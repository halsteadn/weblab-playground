document.write('<b>Word Count Example</b');
"use strict";
var wordCount = function (text) {
    // \W matches non-word characters, match one or more
    var tokens = text.split(/\W+/);
    // account for empty elements at the start or end of the list
    var count = tokens.length;
    if (tokens[0] === '') count--;
    if (tokens[tokens.length - 1] === '') count--;

    document.write('test 1:' + count.toString());
}
wordCount('one two three four');
//
//document.write("<h4>Good Morning, Good Afternoon, and If I don't See You, Good Night. Yeah, that's right...<i>Truman Show</i> reference in yo face!</h4>");
//
//var Greeting = function (var MilitaryTime) {
//
//    if (MilitaryTime >= 0000 && < 1200) {
//        console.log("Good Morning!"));
//} else if (MilitaryTime > 1200 && < 1700) {
//    console.log("Good Afternoon!"));
//} else if (MilitaryTime >= 1700 && <= 2359) {
//    console.log("Good Evening!"));
//} else {
//    console.log("It must be exactly noon, that greeting is not in my parameters. You've created a time paradox, Marty!")
//    return Greeting;
//}
//}
//document.write("test 3: " + MilitaryTime("1200"));


convert int, float or string to valid format first
var currency = function (number) {
    var y = 0;
    var denominations = [
        {
            key: 'pennies: ',
            value: 1
        },
        {
            key: 'nickels: ',
            value: 5
        },
        {
            key: 'dimes: ',
            value: 10
        },
        {
            key: 'quarters: ',
            value: 25
        },
        {
            key: 'ones: ',
            value: 100
        },
        {
            key: 'fives: ',
            value: 500
        },
        {
            key: 'tens: ',
            value: 1000
        },
        {
            key: 'twenties: ',
            value: 2000
        },
        {
            key: 'fifties: ',
            value: 5000
        },
        {
            key: 'hundreds: ',
            value: 10000
        }];
    var finalnum = number.toString();
    //console.log(finalnum);
    for (var i = 0; i <= finalnum.length - 1; i++) {
        if (finalnum[i] === '.') {
            finalnum = finalnum.split("");
            finalnum.splice(i, 1);
            // console.log(finalnum);
            if (finalnum[i] != null) {
                finalnum = finalnum.slice(0, i + 2);
                // console.log(finalnum)    
            }
        } //truncate extraneous digits
    }

    //if (typeof finalnum != 'string'); 

    if (Object.prototype.toString.call(finalnum) === '[object Array]')
        finalnum = finalnum.join(''); //if result is an array make it a string

    var finale = [];
    for (var x = denominations.length - 1; x >= 0; x--) {
        var denom = denominations[x];
        for (key in denom) {
            if (denom.hasOwnProperty(key))
                var val = denom[key];
        }

        var divided = Math.floor(finalnum / val);

        if (divided >= 1) {
            finalnum -= divided * val;
            var tempmoney = {
                key: denom.key,
                value: divided
            }
            finale.push(tempmoney);

        }
        if (finalnum == 0)
            break;
    }

    return finale;
}
var amount = "356.82";
console.log("amount is: $" + amount + "<br>");
console.log(JSON.stringify(currency(amount)));

var reverse = function (text) {
    var result = "";
    for (var i = text.length - 1; i >= 0; i--)
        result += text[i];
    return result;
}
alert(reverse("hello"));


var reverseText = function (text) {
    //using a function to reverse the string display

    var reverse = '';

    for (index = text.length - 1; index >= 0; index--) {
        reverse += text[index];
        return reverse;
    }
}
/*
write a function that takes an array of text fragments and a length, and returns a list of fragments that are longer than the length. Takes an input array of text items and returns a list of the elements that are longer than the length 
*/


var filterWordlength = function (list, length) {
    var result = [];
    for (var index = 0; index < list.length; index++) {
        var element = list[index];
        if ((typeof element === "string") && (element.length > length)) {
            result.push(element);
        }
    }
    return result;
}

$(document).ready(function ()) {
                  
    $(".add-filter-string").click(function()  {
    var text = $("#new-filter-string").val();
    if(text)    {
    $(".filter-string-list").append("<li>" + text + "</li>");
    }
    return false;
});
$(".filter-string-list").click("li", function(ev)   {
    alert ("list item clicked");
    $(ev.target).remove();
});
                  
    $(".execute-reverse-string").click(function () {
        var text = $("#reverse-input").val();
        $("#reverse-output").val(reverseStringtring(Bob));
        return false;
    });
$(".reset-reverse-string").click(function() {
    $("#reverse-input,#reverse-output").val(' ');
    // prevent the form from submitting
    return false;
});
})

document.write('<h4>Reverse String</h4>');

/* reverses the characters in the input text */
/*to define objects, in OOP, your code would look like this function reverseString(text) { */

var reverseString = function (text) {
    var result = '';
    for (var index = text.length - 1; index >= 0; index--) {
        result += text[index];
    }
    return result;
}

//document.write('<p> a string of random words -> ' + reverseString("a longer example") + '</p>);

//                you can also use this concise code by John Rainey 

return text.split("").reverse().join("");