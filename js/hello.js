
/* Send a customized message based on time
*/
//console.log("I am in the hello.js");

// get the date and time 
var today = new Date();


// display the greeting message 
// modify the code so that your code display "Good afternoon" whereas time is from 12:00pm to 6:00pm
var hours = today.getHours();
var greetings = (hours >= 12 && hours < 18) ? 'Good afternoon' : (hours < 12 ? 'Good morning' : 'Good evening');


// write to the document 
document.write(greetings);