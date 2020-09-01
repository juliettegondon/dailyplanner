//display current day and time at the top using moment.js & jquery. 
//I added a separate ID for time so they could be stacked

$("#currentDay").text("Today's date is " + moment().format('MMMM Do YYYY'));
$("#currentTime").text("it is currently " + moment().format('h:mm:ss a'));

//add currentTime var for color coding functionality
var currentTime = moment().hours();


//color-code time blocks past/present/future


//store user input in local storage
