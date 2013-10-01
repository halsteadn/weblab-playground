/*
* returns a greeting based on the time of day
* morning is midnight to noon, afgernoon is noon to five,
* otherwise, it is evening.
*/

var dateGreeting = function(date)   {
    var hours = (new Date).getHours();
    if(hours < 12)  {
        return "Good Morning";
    }
    else if(hours < 17) {
        return "Good Afternoon";
    }
    else    {
        return "Good Evening"
    }
}

document.write("<p>" + morning.toString() + " -> " + dateGreeting(morning) + "</p>");

var morning = new Date(2013, 8, 30, 2, 34)


