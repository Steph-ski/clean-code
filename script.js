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
var newYear = new Date("2026-01-01");
  
calculateAndSetCountDownValue(christmas, "christmas-countdown-value");
calculateAndSetCountDownValue(newYear, "new-year-countdown-value");



  