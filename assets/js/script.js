var setTime = document.querySelector(".hour");

// current day is displayed at the top of the calendar
$ ('#currentDay').text (moment ().format ('dddd MMMM Do YYYY'));


// each time block is color-coded to indicate whether it is in the past, present, or future
function setBgColor () {
  //first declare that hour class is associated with time (as per moment docs) hours accepts numbers from 0 - 23
  var hour = moment ().hours ();
  // console.log(hour); //returns the current time to the hour ex. 15 = 3:00 pm
  //use parseInt to turn a string into a number to be calculated in time.
  $ ('.time-block').each (function () {
    var blockTime = parseInt ($ (this).attr ('id'));

    console.log(this); //verify each time-block is applying the added classes
    if (blockTime > hour) {
      $ (this).addClass ('future');
    } else if (blockTime === hour) {
      $ (this).addClass ('present');
    } else {
      $ (this).addClass ('past');
    }
  });
}


//declare the variable for the save button
var saveBtn = $ ('.saveBtn');

// WHEN I click the save button for that time block
saveBtn.on ('click', function () {
  //declare the variables for time and task. Since each row has it's own button, we are only asking for the click event on the sibling items ie the time and task in the row that sits with this button.
  var time = $ (this).siblings ('.hour').text ();
  var task = $ (this).siblings ('.task').val ();

  // THEN the text and time (value) for that event is saved in local storage
  localStorage.setItem (time, task);
});


//  the calculated time blocks and the assciated task are stored
// WHEN I refresh the page
// THEN the saved events persist 
function savedTask () {
  $ ('.hour').each (function () {
    var blockTime = $ (this).text ();
    var currentTask = localStorage.getItem (blockTime);

    if (currentTask !== null) {
      $ (this).siblings ('.task').val (currentTask);
    }
    return;
  });
}

//call functions
setBgColor ();
savedTask ();
