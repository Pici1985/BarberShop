import  { hairStyleChoice, choice, gentsCuts, ladiesCuts, kidsCuts, spacer, elements, nameField, nameError, emailField, emailEmptyError, emailNoEmailError,phoneField, phoneError,dateField, dateError, timeField, timeError, type, submitButton,  modalContent, confirmButton } from "./variables.js"; 
import { resetForm, formValidator, collectData, dataSaver, dataGetter } from "./functions.js";


// date setter function to make sure user can not choose a date in the past
(function(){
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1; //January is 0 so need to add 1 to make it 1!
    let yyyy = today.getFullYear();
    if(dd<10){
        dd='0'+ dd
    } 
    if(mm<10){
        mm='0'+ mm
    }    
    today = yyyy +'-'+ mm +'-'+ dd;

    // setting date fields minimum value to todays date
    document.getElementById("date").setAttribute("min", today);
})();

// from here there's pretty much only event listeners

//event listeners for each field (NAME) to validate field on keystroke and click

nameField.addEventListener('click', (e) => {
    if(nameField.value === ""){
        nameError.style.display = 'flex';
    } else {
        nameError.style.display = 'none';
        nameField.classList.remove('success');
        
    }
    formValidator();
});

nameField.addEventListener('keyup', (e) => {
    if(nameField.value === ""){
        nameError.style.display = 'flex';
        
    } else {
        nameError.style.display = 'none';
        nameField.classList.add('success');
    }
    formValidator();
});

//event listeners for each field (EMAIL) to validate field on keystroke and click 

emailField.addEventListener('click', (e) => {
    if(emailField.value === ""){
        emailEmptyError.style.display = 'flex';
        formValidator();
    } else {
        emailEmptyError.style.display = 'none';
        emailField.classList.remove('success');
        formValidator();
    }
});

emailField.addEventListener('keyup', (e) => {
    if(emailField.value === ""){
        emailEmptyError.style.display = 'flex';
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
        emailNoEmailError.style.display = 'flex';
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
        emailNoEmailError.style.display = 'flex';
        emailField.classList.remove('success');
        formValidator();
    } else {
        emailNoEmailError.style.display = 'none';
        emailField.classList.add('success');
        formValidator();
    }    
});

//event listeners for each field (PHONE) to validate field on keystroke and click   
  
phoneField.addEventListener('click', (e) => {
    if(phoneField.value === ""){
        phoneError.style.display = 'flex';
        formValidator();
    } else {
        phoneError.style.display = 'none';
        phoneField.classList.remove('success');
        formValidator();
    }
});

phoneField.addEventListener('keyup', (e) => {
    if(phoneField.value === ""){
        phoneError.style.display = 'flex';
        phoneField.classList.remove('success');
        formValidator();
    } else {
        phoneError.style.display = 'none';
        phoneField.classList.add('success');
        formValidator();
    }
});

//event listeners for each field (DATE) to validate field on keystroke and click      

dateField.oninput = (e) => {
    if(dateField.value === ""){
        dateError.style.display = 'flex';
        formValidator();
        // dateField.classList.remove('success');
    } else {
        dateError.style.display = 'none';
        dateField.classList.add('success');
        formValidator();
    }
};

dateField.onblur = () => {
    if(dateField.value === ""){
        dateError.style.display = 'flex';
        dateField.classList.remove('success');
        formValidator();
    } else {
        dateError.style.display = 'none';
        dateField.classList.add('success');
        formValidator();
    }
};

//event listeners for each field (TIME) to validate field on keystroke and click     

timeField.oninput = (e) => {
    if(timeField.value === ""){
        timeError.style.display = 'flex';
        formValidator();
    } else {
        timeError.style.display = 'none';
        timeField.classList.add('success');
        formValidator();
    }
};

timeField.onblur = function(){
    if(timeField.value === ""){
        timeError.style.display = 'flex';
        timeField.classList.remove('success');
        formValidator();
    } else {
        timeError.style.display = 'none';
        timeField.classList.add('success');
        formValidator();
    }
};

// event listeners for dropdown buttons

document.getElementById("gents").addEventListener('click',function(e){
    // to make sure there is no value after making a few choices
    if(hairStyleChoice.value !== ""){
        hairStyleChoice.value = "";    
    }

    choice.value = e.target.innerText;

    gentsCuts.classList.remove('visually-hidden');
    ladiesCuts.classList.add('visually-hidden');
    kidsCuts.classList.add('visually-hidden');
    
    spacer.remove();
});    

document.getElementById("ladies").addEventListener('click',function(e){
    if(hairStyleChoice.value !== ""){
        hairStyleChoice.value = "";    
    }
       
    choice.value = e.target.innerText;
    
    gentsCuts.classList.add('visually-hidden');
    ladiesCuts.classList.remove('visually-hidden');
    kidsCuts.classList.add('visually-hidden');

    spacer.remove();   
});    

document.getElementById("kids").addEventListener('click',function(e){
    if(hairStyleChoice.value !== ""){
        hairStyleChoice.value = "";    
    }

    choice.value = e.target.innerText;

    gentsCuts.classList.add('visually-hidden');
    ladiesCuts.classList.add('visually-hidden');
    kidsCuts.classList.remove('visually-hidden');
    
    spacer.remove();   
});

// eventlistener for hairstyle dropdown to add success class 

Array.from(elements).forEach((element) => {
    element.addEventListener('click', (event) => {
        document.querySelector('#hairStyleChoice').value = event.target.innerText;
        document.getElementById("type").style.border = "2px solid green";
        document.getElementById("type").classList.add('success');
        formValidator();
    });
});

// event listener for submit button

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

//confirm button on second Modal

confirmButton.addEventListener('click', (e) => {
    e.preventDefault();
    // this is where we can send the HTTP request with the JSON data from
    let data = collectData();
    dataSaver(data);
    // dataDisplayer(data);
    resetForm();
});

dataGetter();


// document.querySelectorAll(".trashcan").forEach(el => {
//     el.addEventListener('click', () =>{
//         alert("Trashcan doesn`t work yet!!");
//     })    
// });

// document.querySelectorAll(".pencil").forEach(el => {
//     el.addEventListener('click', () =>{
//         alert("Pencil doesn`t work yet!!");
//     })    
// });



