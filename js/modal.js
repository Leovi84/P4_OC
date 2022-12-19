function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const close = document.querySelector(".close");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
close.addEventListener("click", closeModal => {
  modalbg.style.display = "none";
});

// Valid on submit
const form = document.querySelector('form');
const input = document.getElementsByTagName('input');
const first = document.getElementById('first');
const last = document.getElementById('last');
const email = document.getElementById('email');
const birthdate = document.getElementById('birthdate');
const quantity = document.getElementById('quantity');
const location1 = document.getElementById('location1');
const location2 = document.getElementById('location2');
const location3 = document.getElementById('location3');
const location4 = document.getElementById('location4');
const location5 = document.getElementById('location5');
const location6 = document.getElementById('location6');

const dateFormat = /(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/;
const numbers = /^[0-9]+$/;
const emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

// submit handler

form.addEventListener('submit', (e) => {
  // on form submission, prevent default
  e.preventDefault();
})

function validate() {
  if (first.value === ''|| first.value.length <= 2) {
    alert ("Veuillez entrer 2 caractères ou plus pour le champ du prénom");
    return false;
  } 
  else if (last.value === '' || last.value.length <= 2) { 
    alert ("Veuillez entrer 2 caractères ou plus pour le champ du nom");
    return false;
  } 
  else if (!emailFormat.test(email.value)) { 
    alert ("Remplir le champ avec votre email");
    return false;
  }
  else if (!dateFormat.test(birthdate.value)) { 
    console.log(1);
    alert ("Vous devez entrer votre date de naissance");
    return false;
  }
  else if (!quantity.value.match(numbers)) { 
    alert ("Indiquer le nombre de tournois");
    return false;
  }
  else if (!location1.checked && !location2.checked && !location3.checked && !location4.checked && !location5.checked && !location6.checked) { 
    alert ("Vous devez choisir une option");
    return false;
  }

}