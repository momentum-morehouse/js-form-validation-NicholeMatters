// Each field is required. If there is no user input in that field, mark it as invalid.
// invalid fields will turn red
let form = document.querySelector("#parking-form");
//this is keep the form from erasing when its submitted incomplete
form.addEventListener("submit", function (event){
  event.preventDefault();
  //have to call on the whole field and the indiviual id
  let nameField = document.querySelector("#name-field")
  let customer = document.querySelector("#name")
  if (customer.value === '' || customer.value === null ) {
   //this makes the box red by itself but isnt working inside the function
      alert("Name is required")
   nameField.classList.add("input-invalid")
   
  }  else  {
   //alert("Incomplete Form");
   nameField.classList.remove("input-invalid")
   nameField.classList.add("input-valid")
  }

  
});

// DIRECTIONS: div element with class "input-field" that surrounds each form label and input is the element to change. You will add the "input-valid" or "input-invalid" class to this div.

//Change from WHITE to RED
// function redTest() {
//  let customername = document.getElementById("name");
//  if (customername.value === 0) {
//    //this makes the box red by itself but isnt working inside the function
//    customername.classList.add("input-valid");
//   }  else  {
//    //alert("Incomplete Form");
//    customername.classList.add("input-invalid");
//   }
 
//  return ;  
//  }

//  redTest();

// function red (field){
//   //field.classList.remove();
//   field.classList.add("input-invalid");
//   console.log(field.classList);

// }

// function change (){
//   let customerName = document.querySelectorAll(".input-field input-valid");
//   for (let names of customerName) {
//   names.addEventListener('click', function(){  
//   //names.classList.remove(".input-field input-valid")
//   names.classList.add("input-field input-invalid")
//   }
//   );
//   };
// }

// change();

//Goal is to select valid or invalid and possible make a function to do that


