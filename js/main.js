var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var input = document.getElementById("input");
var firstNumber = document.querySelector("h2");

var newNumber = 0;


function add() {
    var x = parseInt(input.value); 
    
    if (isNaN(x)) {
        input.value = "";
        firstNumber.textContent = newNumber;
    } else {
        newNumber += parseInt(x);
        firstNumber.textContent = newNumber;
        input.value = "";
     }  
 }

 function subtract() {
    var x = parseInt(input.value); 
    
    if (isNaN(x)) {
        input.value = "";
        firstNumber.textContent = newNumber;
    } else {
        newNumber -= parseInt(x);
        firstNumber.textContent = newNumber;
        input.value = "";
     } 
 }


plus.addEventListener('click', add);
minus.addEventListener('click', subtract);



