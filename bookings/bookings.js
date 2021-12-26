// Global variables
let gender = ""; 
let elements = "";

let hairStyleChoice = document.getElementById('hairStyleChoice');
let choice = document.getElementById('choice');
let gentsCuts = document.getElementById('gentsCuts');
let ladiesCuts = document.getElementById('ladiesCuts');
let kidsCuts = document.getElementById('kidsCuts');
let spacer = document.getElementById('spacer');


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

elements = document.getElementsByClassName('hairstyle');

Array.from(elements).forEach((element) => {
    element.addEventListener('click', (event) => {
        // console.log(event.target.innerText);
        document.querySelector('#hairStyleChoice').value = event.target.innerText;
        document.getElementById("type").style.border = "1px solid green";
    });
});

// field validations 




// functions needed for submit

// form validator function
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

(function() {
    'use strict'
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })();


function submitForm(){
    let data = collectData();
    alert("This is the JSON object that we can send to the backend: " + JSON.stringify(data));
    // this is where we can send the HTTP request with the JSON data from
    checkDropdownValues();
    resetForm();
    // event.preventDefault();
} 

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

function checkDropdownValues(){
    console.log('check dropdown');
    if(choice.value === ""){
        document.getElementById("genderFeedback").classList.remove('visually-hidden');
        document.getElementById("errorMessages").classList.remove('visually-hidden');
        document.getElementById("type").style.border = "1px solid #dc3545";
    }

    if(hairStyleChoice.value === ""){
        document.getElementById("hairStyleFeedback").classList.remove('visually-hidden');
        document.getElementById("errorMessages").classList.remove('visually-hidden');
        document.getElementById("type").style.border = "1px solid #dc3545";
    }
}

function resetForm(){
    // document.getElementById('inputForm').reset();
    choice.innerText = "";
    hairStyleChoice.innerText = "";
    if(gentsCuts){
        gentsCuts.classList.add('visually-hidden');   
    }
    if(ladiesCuts){
        ladiesCuts.classList.add('visually-hidden');   
    }
    if(kidsCuts){
        kidsCuts.classList.add('visually-hidden');   
    }
}

    

