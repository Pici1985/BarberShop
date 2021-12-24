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
    if(hairStyleChoice.innerText !== ""){
        hairStyleChoice.innerText = "";    
    }
    gender = e.target.innerText;   
    // console.log(gender);
    choice.innerText = gender;
    gentsCuts.classList.remove('visually-hidden');
    ladiesCuts.classList.add('visually-hidden');
    kidsCuts.classList.add('visually-hidden');
    spacer.remove();
});    

document.getElementById("ladies").addEventListener('click',function(e){
    if(hairStyleChoice.innerText !== ""){
        hairStyleChoice.innerText = "";    
    }
    gender = e.target.innerText;   
    // console.log(gender);
    choice.innerText = gender;
    gentsCuts.classList.add('visually-hidden');
    ladiesCuts.classList.remove('visually-hidden');
    kidsCuts.classList.add('visually-hidden');
    spacer.remove();   
});    

document.getElementById("kids").addEventListener('click',function(e){
    if(hairStyleChoice.innerText !== ""){
        hairStyleChoice.innerText = "";    
    }
    gender = e.target.innerText;   
    // console.log(gender);
    choice.innerText = gender;
    gentsCuts.classList.add('visually-hidden');
    ladiesCuts.classList.add('visually-hidden');
    kidsCuts.classList.remove('visually-hidden');
    spacer.remove();   
});  

elements = document.getElementsByClassName('hairstyle');

Array.from(elements).forEach((element) => {
    element.addEventListener('click', (event) => {
        // console.log(event.target.innerText);
        document.querySelector('#hairStyleChoice').innerText = event.target.innerText;
    });
});

// field validations 




// functions needed for submit
function submitForm(){
    let data = collectData();
    console.log("This is the JSON object that we can send to the backend: " + JSON.stringify(data));
    // this is where we can send the HTTP request with the JSON data from
    resetForm();
} 

function collectData(){
    let name = document.getElementById('name').value;    
    let email = document.getElementById('email').value;    
    let phone = document.getElementById('phone').value;    
    let date = document.getElementById('date').value;    
    let time = document.getElementById('time').value;
    let gender = document.getElementById('choice').innerText;
    let style = document.getElementById('hairStyleChoice').innerText; 
    
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

function resetForm(){
    document.getElementById('inputForm').reset();
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

    

