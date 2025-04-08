function f1(targetDate, elementToUpdate) {
    var p = new Date();
   // var q = new Date("2025-12-25");
  
    var variable = Math.round((targetDate - p) / (1000 * 60 * 60 * 24));
    var variable2 = document.getElementById(elementToUpdate);
    variable2.innerText = variable;
  }
  
 /* function f2() {
    var p = new Date();
    var q = new Date("2026-01-01");
  
    var variable = Math.round((q - p) / (1000 * 60 * 60 * 24));
  
    var variable2 = document.getElementById("my-element2");
    variable2.innerText = variable;
  }*/
  
    var targetDate1 = new Date("2025-12-25");
    var elementToUpdate1 = "my-element";

    var targetDate2 = new Date("2026-01-01");
    var elementToUpdate2 = "my-element2"; 
  
  f1(targetDate1, elementToUpdate1);
  f1(targetDate2, elementToUpdate2);
  //f2();
  