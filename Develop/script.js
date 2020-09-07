const localStorage = window.localStorage;

//display current day and time at the top using moment.js & jquery. 
//I added a separate ID for time so they could be stacked in the jumbotron or have it appear in a bootstrap modal if possible.. check mate!!!

$("#currentDay").text("Today's date is " + moment().format('MMMM Do YYYY'));
$("#currentTime").text("It is currently " + moment().format('h:mm:ss a'));

  $('#myModal').on('click', function() {
    $('#myModal').show();
});

//add presentTime var for color coding functionality. activities will indicate tense in a for loop
//color-coded time blocks past/present/future
var presentTime = moment().hours();
var activities = $(".activity");

console.log('Activities value', activities)

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
// ADHERE TO: when i click into timeblock, i can enter an event & save it to local storage



//I have all divs 9-17 with 
    //-text areas for users 
        // write their activities

//user inputs the activity and 
    // -hits save 
    // - tnformation gets saved to local storage
//


//localStorage only accepts strings

//GetValue
// var value = JSON.parse(localStorage.getItem('keyForItem')) || ''

//Set Value
// to put values in --> localStorage.setItem('nameOfValueToSaveAs', JSON.stringify(valToSave))


//Remove one item
//localStorage.removeItem('keyToRemove')



//NUKE the whole thing
//localStorage.clear()


$(".saveBtn").on("click", function(event){
    const id = event.target.id
    const splitString = id.split('-')
    const textAreaId = splitString[0]
    const searchVal = '#' + textAreaId
    const textAreaValue = $(searchVal).val()
    console.log('TEXT AREA--->',textAreaValue)
    localStorage.setItem(id, textAreaValue);
    

});