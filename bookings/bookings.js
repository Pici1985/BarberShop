let gender = ""; 
let elements = "";

let choice = document.getElementById('choice');
let gentsCuts = document.getElementById('gentsCuts');
let ladiesCuts = document.getElementById('ladiesCuts');
let kidsCuts = document.getElementById('kidsCuts');

document.getElementById("gents").addEventListener('click',function(e){
    gender = e.target.innerText;   
    console.log(gender);
    choice.innerText = gender;
    gentsCuts.classList.remove('visually-hidden');
    ladiesCuts.classList.add('visually-hidden');
    kidsCuts.classList.add('visually-hidden');
});    
document.getElementById("ladies").addEventListener('click',function(e){
    gender = e.target.innerText;   
    console.log(gender);
    choice.innerText = gender;
    gentsCuts.classList.add('visually-hidden');
    ladiesCuts.classList.remove('visually-hidden');
    kidsCuts.classList.add('visually-hidden');   
});    
document.getElementById("kids").addEventListener('click',function(e){
    gender = e.target.innerText;   
    console.log(gender);
    choice.innerText = gender;
    gentsCuts.classList.add('visually-hidden');
    ladiesCuts.classList.add('visually-hidden');
    kidsCuts.classList.remove('visually-hidden');   
});  

elements = document.getElementsByClassName('hairstyle');

Array.from(elements).forEach((element) => {
    element.addEventListener('click', (event) => {
        console.log(event.target.innerText);
        document.querySelector('.hairStyleChoice').innerText = event.target.innerText;
  });
});



function submitForm(){
    console.log('anyad');
}