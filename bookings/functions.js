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
    // console.log('Resetform called');
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

let entriesArray = "";

function dataSaver(data){
  // localStorage.clear();
  let nrOfBookings = localStorage.length;
  // console.log(localStorage.length);
  let booking = "id " + nrOfBookings;
  // console.log(JSON.stringify(data));
  // console.log(bookings);
  localStorage.setItem(booking, JSON.stringify(data));
  dataGetter();
}

function dataGetter(){
  let object = localStorage;
  let entries = Object.entries(object); 
  console.log(entries);
  entriesArray = entries;
  dataDisplayer(entries);
  document.querySelectorAll(".trashcan").forEach(el => {
      el.addEventListener('click', () =>{
          alert("Trashcan doesn`t work yet!!");
      })    
  });
    
  document.querySelectorAll(".pencil").forEach(el => {
      el.addEventListener('click', () =>{
          alert("Pencil doesn`t work yet!!");
      })    
  });
}

function dataDisplayer(entries){
  let bookingContainer = document.getElementById("bookingContainer");
  bookingContainer.innerHTML = "";
  entries.forEach((line) => {
    let bookingDetails = JSON.parse(line[1]);
    let div = document.createElement("div");
    div.classList.add('bookingWrapper')
    div.classList.add('text-start')
    div.innerHTML = `
    <div class="card m-1 p-3">
      <div>
        <p><span> Name: </span> ${bookingDetails.name}</p>
        <p><span> Email: </span> ${bookingDetails.email}</p>
        <p><span> Phone number: </span> ${bookingDetails.phone}</p>
        <p><span> Date: </span> ${bookingDetails.date}</p>
        <p><span> Time: </span> ${bookingDetails.time}</p>
        <p><span> Gender: </span> ${bookingDetails.gender}</p>
        <p><span> Style: </span> ${bookingDetails.style}</p>
      </div>
      <div class="icons">
        <button class="btn btn-outline-danger m-1 trashcan"><i class="fa fa-trash-alt"></i></button>
        <button class="btn btn-outline-success m-1 pencil"><i class="fa fa-pencil-alt"></i></i></button>
      </div>
    </div>
    `;
    bookingContainer.appendChild(div);  
  });
}

export { resetForm, formValidator, collectData, dataSaver, dataDisplayer, dataGetter };