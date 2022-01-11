// Global variables
let gender = ""; 
let elements = "";

// variables for dropdown field

let hairStyleChoice = document.getElementById('hairStyleChoice');
let choice = document.getElementById('choice');
let gentsCuts = document.getElementById('gentsCuts');
let ladiesCuts = document.getElementById('ladiesCuts');
let kidsCuts = document.getElementById('kidsCuts');
let spacer = document.getElementById('spacer');

// varibles for inputfields
// varibles for inputfields
// varibles for inputfields

let nameField = document.getElementById('name');
let nameError = document.getElementById('nameError')

let emailField = document.getElementById('email');
let emailEmptyError = document.getElementById('emailEmptyError');
let emailNoEmailError = document.getElementById('emailNoEmailError');

let phoneField = document.getElementById('phone');
let phoneError = document.getElementById('phoneError')

let dateField = document.getElementById('date');
let dateError = document.getElementById('dateError');

let timeField = document.getElementById('time');
let timeError = document.getElementById('timeError');

let type = document.getElementById("type");

// variables for submit

let submitButton = document.getElementById('submitButton');
let inputForm = document.getElementById('inputForm');  
let modalContent = document.getElementById('modalContent');
let confirmButton = document.getElementById('confirmButton');  




// functions needed for dropdown buttons

document.getElementById("gents").addEventListener('click',function(e){
    if(hairStyleChoice.value !== ""){
        hairStyleChoice.value = "";    
    }
    gender = e.target.innerText;   
    // console.log(gender);
    choice.value = gender;
    gentsCuts.classList.remove('visually-hidden');
    ladiesCuts.classList.add('visually-hidden');
    kidsCuts.classList.add('visually-hidden');
    document.getElementById("genderFeedback").classList.add('visually-hidden');
    document.getElementById("hairStyleFeedback").classList.add('visually-hidden');
    document.getElementById("errorMessages").classList.add('visually-hidden');
    spacer.remove();
});    

document.getElementById("ladies").addEventListener('click',function(e){
    if(hairStyleChoice.value !== ""){
        hairStyleChoice.value = "";    
    }
    gender = e.target.innerText;   
    // console.log(gender);
    choice.value = gender;
    gentsCuts.classList.add('visually-hidden');
    ladiesCuts.classList.remove('visually-hidden');
    kidsCuts.classList.add('visually-hidden');
    document.getElementById("genderFeedback").classList.add('visually-hidden');
    document.getElementById("hairStyleFeedback").classList.add('visually-hidden');
    document.getElementById("errorMessages").classList.add('visually-hidden');

    spacer.remove();   
});    

document.getElementById("kids").addEventListener('click',function(e){
    if(hairStyleChoice.value !== ""){
        hairStyleChoice.value = "";    
    }
    gender = e.target.innerText;   
    // console.log(gender);
    choice.value = gender;
    gentsCuts.classList.add('visually-hidden');
    ladiesCuts.classList.add('visually-hidden');
    kidsCuts.classList.remove('visually-hidden');
    document.getElementById("genderFeedback").classList.add('visually-hidden');
    document.getElementById("hairStyleFeedback").classList.add('visually-hidden');
    document.getElementById("errorMessages").classList.add('visually-hidden');

    spacer.remove();   
});  

// eventlistener for hairstyle dropdown to add success class and validate whole form
elements = document.getElementsByClassName('hairstyle');

Array.from(elements).forEach((element) => {
    element.addEventListener('click', (event) => {
        // console.log(event.target.innerText);
        document.querySelector('#hairStyleChoice').value = event.target.innerText;
        document.getElementById("type").style.border = "2px solid green";
        document.getElementById("type").classList.add('success');
        formValidator();
    });
});


// functions needed for submit

// date setter function
(function(){
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1; //January is 0 so need to add 1 to make it 1!
    let yyyy = today.getFullYear();
    if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 
    
    today = yyyy+'-'+mm+'-'+dd;
    document.getElementById("date").setAttribute("min", today);
    // console.log('datesetter IIFE working.');
})();
 
  // gets data values out of form
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

//event listeners for each field (NAME)

nameField.addEventListener('click', (e) => {
    if(nameField.value === ""){
        nameError.style.display = 'block';
    } else {
        nameError.style.display = 'none';
        nameField.classList.remove('success');
        
    }
    formValidator();
});
nameField.addEventListener('keyup', (e) => {
    if(nameField.value === ""){
        nameError.style.display = 'block';
        
    } else {
        nameError.style.display = 'none';
        nameField.classList.add('success');
    }
    formValidator();
});

//event listeners for each field (EMAIL)  

//emailfield empty
emailField.addEventListener('click', (e) => {
    if(emailField.value === ""){
        emailEmptyError.style.display = 'block';
        formValidator();
    } else {
        emailEmptyError.style.display = 'none';
        emailField.classList.remove('success');
        formValidator();
    }
});
emailField.addEventListener('keyup', (e) => {
    if(emailField.value === ""){
        emailEmptyError.style.display = 'block';
        formValidator();
    } else {
        emailEmptyError.style.display = 'none';
        formValidator();
    }    
});

//invalid email address
emailField.addEventListener('click', (e) => {
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!emailField.value.match(mailformat)){
        emailNoEmailError.style.display = 'block';
        formValidator();
    } else {
        emailNoEmailError.style.display = 'none';
        emailField.classList.remove('success');
        formValidator();
    }
});
emailField.addEventListener('keyup', (e) => {
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!emailField.value.match(mailformat)){
        emailNoEmailError.style.display = 'block';
        emailField.classList.remove('success');
        formValidator();
    } else {
        emailNoEmailError.style.display = 'none';
        emailField.classList.add('success');
        formValidator();
    }    
});

//event listeners for each field (PHONE)      
phoneField.addEventListener('click', (e) => {
    if(phoneField.value === ""){
        phoneError.style.display = 'block';
        formValidator();
    } else {
        phoneError.style.display = 'none';
        phoneField.classList.remove('success');
        formValidator();
    }
});

phoneField.addEventListener('keyup', (e) => {
    if(phoneField.value === ""){
        phoneError.style.display = 'block';
        phoneField.classList.remove('success');
        formValidator();
    } else {
        phoneError.style.display = 'none';
        phoneField.classList.add('success');
        formValidator();
    }
});

//event listeners for each field (DATE)      
dateField.addEventListener('click', (e) => {
    if(dateField.value === ""){
        dateError.style.display = 'block';
        formValidator();
        // dateField.classList.remove('success');
    } else {
        dateError.style.display = 'none';
        dateField.classList.add('success');
        formValidator();
    }
});

dateField.onblur = function(){
    if(dateField.value === ""){
        dateError.style.display = 'block';
        dateField.classList.remove('success');
        formValidator();
    } else {
        dateError.style.display = 'none';
        dateField.classList.add('success');
        formValidator();
    }
};

//event listeners for each field (TIME)      
timeField.addEventListener('click', (e) => {
    if(timeField.value === ""){
        timeError.style.display = 'block';
        formValidator();
        // timeField.classList.remove('success');
    } else {
        timeError.style.display = 'none';
        timeField.classList.add('success');
        formValidator();
    }
});
timeField.onblur = function(){
    if(timeField.value === ""){
        timeError.style.display = 'block';
        timeField.classList.remove('success');
        formValidator();
    } else {
        timeError.style.display = 'none';
        timeField.classList.add('success');
        formValidator();
    }
};

// formvalidator

function formValidator(){
    if(
        nameField.classList.contains('success') &&
        emailField.classList.contains('success') &&
        phoneField.classList.contains('success') &&
        dateField.classList.contains('success') &&
        timeField.classList.contains('success') &&
        type.classList.contains('success')
        ){
            submitButton.classList.remove('disabled');
        }
};

// submit button

submitButton.addEventListener('click', (e) => {
    let data = collectData();
    // console.log(data);
    modalContent.innerHTML = `
        <p><strong>Your name:</strong> ${data.name}</p>
        <p><strong>Your email address:</strong> ${data.email}</p>
        <p><strong>Your phone number:</strong> ${data.phone}</p>
        <p><strong>Appointment date:</strong> ${data.date}</p>
        <p><strong>Appointment time:</strong> ${data.time}</p>
        <p><strong>Appointment type:</strong> ${data.gender} - ${data.style}</p>

    `
});

//confirm button 

confirmButton.addEventListener('click', (e) => {
    e.preventDefault();
    // this is where we can send the HTTP request with the JSON data from
    let data = collectData();
    console.log("This is the JSON object that we can send to the backend: " + JSON.stringify(data));
    resetForm();
});
    
    

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
}   
            
//js for the animated button and to submit the form
// const animatedbtn = document.querySelector("[data-btn]")
// animatedbtn.addEventListener("click", (e) => {
    //     e.preventDefault();
    //     let inputForm = document.getElementById('inputForm');    
    //     if(inputForm.classList.contains('everything-valid')){
        //         animatedbtn.classList.add("animating");
        //     }
// });




