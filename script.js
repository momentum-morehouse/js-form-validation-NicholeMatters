// Each field is required. If there is no user input in that field, mark it as invalid.
// invalid fields will turn red
function emptyFields(){
//this function will review the whole document for empty fields
//required fields: name, year, make, model, date, number of days, credit card, CVV and expiration date
let customer = document.querySelector ('#name');
let cyear = document.querySelector ('#car-year');
let cmake = document.querySelector ('#car-make');
let cmodel = document.querySelector ('#car-model');
let pdate = document.querySelector ('#start-date');
let amtdays = document.querySelector ('#days');
let cc = document.querySelector ('#credit-card-field');
let cCVV = document.querySelector ('#CVV');
let ccDate = document.querySelector ('#expiration-date');

}

emptyFields();


// DIRECTIONS: div element with class "input-field" that surrounds each form label and input is the element to change. You will add the "input-valid" or "input-invalid" class to this div.

// //Change from WHITE to RED
// function Emptyvalidation(inputfield)
//       {
//  if (inputfield.value.length === 0) 
//       {
//  document.inputfield.style.background =   'Red'; 
//       }
//  else
//       {
//  document.inputfield.style.background = 'White';
//       }
//  alert("Incomplete Form");
//  return error;  
//       }