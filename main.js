console.log("Hello");

// This function clear all the values
function clearScreen() {
    document.getElementById("result").value = "";
   }
   
   // This function display values
   function display(value) {
    document.getElementById("result").value += value;
   }

   // This function evaluates the expression and return result
   function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
   }

   function clearlast() {
    var clearlast = document.getElementById("result").value;
    document.getElementById("result").value = clearlast.slice(0, -1);
   }

   function percentage() {
    var percent = document.getElementById("result").value;
    document.getElementById("result").value = percent/100;
   }