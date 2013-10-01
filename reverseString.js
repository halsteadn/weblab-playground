var reverseString = function(text)    {
    var result = '';
    for(var index = text.length -1; index >= 0; index--)    {
        result += text[index];
    }
    return result;
}
               
//                you can also use this concise code by John Rainey 
               
               return text.split("") .reverse() .join("");
document.write('<p> a string of random words -> ' + reverseString("a longer example") + '</p>);

