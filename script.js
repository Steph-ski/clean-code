function calculateAndSetCountDownValue(targetDate, elementToUpdate) {
    var dateDiffInDays = calculateDateDiffInDays(targetDate);
    var countDownValue = document.getElementById(elementToUpdate);   
    countDownValue.innerText = dateDiffInDays;
  }

function calculateDateDiffInDays(targetDate) {
    var today = new Date();
    var dateDiffInDays = Math.round((targetDate - today) / (1000 * 60 * 60 * 24));
    return dateDiffInDays;
  }
   
var christmas = new Date("2025-12-25");
var christmasCountDownValue = "christmas-countdown-value";

var newYear = new Date("2026-01-01");
var newYearCountDownValue = "new-year-countdown-value"; 
  
calculateAndSetCountDownValue(christmas, christmasCountDownValue);
calculateAndSetCountDownValue(newYear, newYearCountDownValue);



  