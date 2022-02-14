// this file contains all te variables needed for bookings.js

// variables for dropdown fields

let hairStyleChoice = document.getElementById('hairStyleChoice');
let choice = document.getElementById('choice');
let gentsCuts = document.getElementById('gentsCuts');
let ladiesCuts = document.getElementById('ladiesCuts');
let kidsCuts = document.getElementById('kidsCuts');
let spacer = document.getElementById('spacer');
let elements = document.getElementsByClassName('hairstyle');

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

// variables for submit functinalities

let submitButton = document.getElementById('submitButton'); 
let modalContent = document.getElementById('modalContent');
let confirmButton = document.getElementById('confirmButton');


export { hairStyleChoice, choice, gentsCuts, ladiesCuts, kidsCuts, spacer, elements, nameField, nameError, emailField, emailEmptyError, emailNoEmailError,phoneField, phoneError,dateField, dateError, timeField, timeError, type, submitButton, modalContent, confirmButton };