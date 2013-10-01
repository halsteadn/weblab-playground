document.write('<h4>Reverse String</h4>');
              
              /* reverses the characters in the input text */
            /*to define objects, in OOP, your code would look like this function reverseString(text) { */
              
var reverseString = function(text)    {
    var result = '';
    for(var index = text.length -1; index >= 0; index--)    {
        result += text[index];
    }
    return result;
}
document.write('<p> a string of random words -> ' + reverseString("a longer exeample") + '</p>);
               
//                you can also use this concise code by John Rainey 
               
               return text.split("") .reverse() .join("");
