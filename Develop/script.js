//display current day and time at the top using moment.js & jquery. 
//I added a separate ID for time so they could be stacked in the jumbotron

$("#currentDay").text("Today's date is " + moment().format('MMMM Do YYYY'));
$("#currentTime").text("It is currently " + moment().format('h:mm:ss a'));

//add presentTime var for color coding functionality. activity will indicate tense in a for loop
//color-code time blocks past/present/future
var presentTime = moment().hours();
var activities = $(".activity");

for (var i = 9; i < 18; i++) {
    console.log(i, presentTime);
    if ( i <presentTime) {
        $('#' + i).addClass("past")
    }
    else if ( i === presentTime) {
        $('#' + i).addClass("present")
    }
    else { $('#' + i).addClass("future")
}
}


//store user input in local storage

