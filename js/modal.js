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

const form = document.querySelector('form');
const input = document.getElementsByTagName('input');

form.addEventListener('submit', (e) => {
  e.preventDefault();
})

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

  const numbers = /^[0-9]+$/;
  const emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  const errorFirst = [];
  const errorLast = [];
  const errorEmail = [];
  const errorBirthdate = [];
  const errorQuantity = [];
  const errorLocation = [];
  const errorCheck = [];

function resetErrors() {
  first.parentElement.removeAttribute("data-error")
  first.parentElement.removeAttribute("data-error-visible")
  last.parentElement.removeAttribute("data-error")
  last.parentElement.removeAttribute("data-error-visible")
  email.parentElement.removeAttribute("data-error")
  email.parentElement.removeAttribute("data-error-visible")
  birthdate.parentElement.removeAttribute("data-error")
  birthdate.parentElement.removeAttribute("data-error-visible")
  quantity.parentElement.removeAttribute("data-error")
  quantity.parentElement.removeAttribute("data-error-visible")
  location1.parentElement.removeAttribute("data-error")
  location1.parentElement.removeAttribute("data-error-visible")
  location2.parentElement.removeAttribute("data-error")
  location2.parentElement.removeAttribute("data-error-visible")
  location3.parentElement.removeAttribute("data-error")
  location3.parentElement.removeAttribute("data-error-visible")
  location4.parentElement.removeAttribute("data-error")
  location4.parentElement.removeAttribute("data-error-visible")
  location5.parentElement.removeAttribute("data-error")
  location5.parentElement.removeAttribute("data-error-visible")
  location6.parentElement.removeAttribute("data-error")
  location6.parentElement.removeAttribute("data-error-visible")
  checkbox1.parentElement.removeAttribute("data-error")
  checkbox1.parentElement.removeAttribute("data-error-visible")
}

function setError(element, message) {
  element.parentElement.setAttribute("data-error", message);
  element.parentElement.setAttribute("data-error-visible", true);
}


function validate() {
  resetErrors();
  if (first.value === '' || first.value.length <= 2) {
      setError(first, "Veuillez entrer 2 caractères ou plus pour le champ du prénom");
      return false;
  } else if (last.value === '' || last.value.length <= 2) {
      setError(last, "Veuillez entrer 2 caractères ou plus pour le champ du nom");
      return false;
  } else if (!emailFormat.test(email.value)) {
      setError(email, "Remplir le champ avec votre email");
      return false;
  } else if (birthdate.value === '') {
      setError(birthdate, "Vous devez entrer votre date de naissance");
      return false;
  } else if (!quantity.value.match(numbers.value)) {
      setError(quantity, "Indiquer le nombre de tournois");
      return false;
  } else if (!location1.checked && !location2.checked && !location3.checked && !location4.checked && !location5.checked && !location6.checked) {
      setError(location1, "Vous devez choisir une option");
      return false;
  } else if (!checkbox1.checked) {
      setError(checkbox1, "Vous devez cocher la case");
      return false;
  } else {
      alert("Merci ! Votre réservation a été reçue.");
      return true;
  }
}