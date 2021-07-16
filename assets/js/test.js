const rows = document.getElementsByClassName("row");
let currentHour = parseInt(moment().format('H'));

Array.from(rows).forEach(row => {
  let
    rowIdString = row.id,
    rowHour;
  if (rowIdString) {
    rowHour = parseInt(rowIdString);
  }
  if (rowHour) {
    // Compares row id to current hour and sets color accordingly
    if (currentHour === rowHour) {
      setColor(row, "red");
    } else if ((currentHour < rowHour) && (currentHour > rowHour - 6)) {
      setColor(row, "green");
    } else if ((currentHour > rowHour) && (currentHour < rowHour + 6)) {
      setColor(row, "lightgrey");
    } else {
      setColor(row, "white");
    }
  }
});

function setColor(element, color) {
  element.style.backgroundColor = color;
}
//--------------------another option
var currentHour = Date.now().getHours();
$('.colorcode').each(function(){
    var val = parseInt($(this).prop('id'));
    if(val > currentHour && val < currentHour+6){
        $(this).css('background-color','Blue');
    }else if(val < currentHour && val > currentHour-6){
        $(this).css('background-color','Red');
    }else if(val === currentHour){
        $(this).css('background-color','Green');
    }else{
        $(this).css('background-color','White');
    }
});