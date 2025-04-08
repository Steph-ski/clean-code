function f1(targetDate, elementToUpdate) {
    var p = new Date();
    var dateDiffInDays = Math.round((targetDate - p) / (1000 * 60 * 60 * 24));
    var countDownValue = document.getElementById(elementToUpdate);
    countDownValue.innerText = dateDiffInDays;
  }
   
var christmas = new Date("2025-12-25");
var christmasCountDownValue = "christmas-countdown-value";

var newYear = new Date("2026-01-01");
var newYearCountDownValue = "new-year-countdown-value"; 
  
f1(christmas, christmasCountDownValue);
f1(newYear, newYearCountDownValue);

  