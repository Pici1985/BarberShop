import  { hairStyleChoice, choice, gentsCuts, ladiesCuts, kidsCuts, spacer, elements, nameField, nameError, emailField, emailEmptyError, emailNoEmailError,phoneField, phoneError,dateField, dateError, timeField, timeError, type, submitButton,  modalContent, confirmButton } from "./variables.js"; 
// this file contains all callable functions

// collects input data from the form
  function collectData(){
    let name = document.getElementById('name').value;    
    let email = document.getElementById('email').value;    
    let phone = document.getElementById('phone').value;    
    let date = document.getElementById('date').value;    
    let time = document.getElementById('time').value;
    let gender = document.getElementById('choice').value;
    let style = document.getElementById('hairStyleChoice').value; 
    
    let Booking = {
        name : name,
        email : email,
        phone : phone,
        date : date,
        time : time,
      gender : gender,
      style : style 
  }
  return Booking;
}

// final validation on the form 
function formValidator(){
    if(
        nameField.classList.contains('success') &&
        emailField.classList.contains('success') &&
        phoneField.classList.contains('success') &&
        dateField.classList.contains('success') &&
        timeField.classList.contains('success') &&
        type.classList.contains('success')
        ){
            submitButton.classList.remove('visually-hidden');
        }
};

// resets the form after submit 
function resetForm(){
    console.log('Resetform called');
    choice.value = "";
    hairStyleChoice.value = "";
    nameField.value = "";
    emailField.value = "";
    phoneField.value = "";
    dateField.value = "";
    timeField.value = "";
    gentsCuts.classList.add('visually-hidden');   
    ladiesCuts.classList.add('visually-hidden');   
    kidsCuts.classList.add('visually-hidden');
    nameField.classList.remove('success');   
    emailField.classList.remove('success');   
    phoneField.classList.remove('success');   
    dateField.classList.remove('success');   
    timeField.classList.remove('success');  
    type.style.border = "none";
    type.classList.remove('success'); 
    submitButton.classList.add('visually-hidden');
}  

export { resetForm, formValidator, collectData };