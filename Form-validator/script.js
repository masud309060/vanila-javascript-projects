const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

// Show input Error message 
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

// Show input Success message 
function showSuccess(input){
  const formControl = input.parentElement;
  formControl.className = 'form-control success'
}

// Email validation 
function checkEmail(input){
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(re.test(input.value.trim())){
    showSuccess(email)
  } else {
    showError(email, "Email is not valid")
  }
}

// Check required fields 
function checkRequired(inputArr){
  inputArr.forEach(function(input){
    if(input.value.trim() === ''){ // trim() function remove white space from both sides of velue
      showError(input, `${getFieldName(input)} is required`)
    } else {
      showSuccess(input)
    }
  })
}

// checkLength 
function checkLength(input, min, max) {
  if(input.value.length < min) {
    showError(input, `${getFieldName(input)} must be at least ${min} characters`)
  } else if(input.value.length > max){
    showError(input, `${getFieldName(input)} must be less than ${max} characters`)
  } else {
    showSuccess(input)
  }
}

// Check passwords Match 
function checkPasswordsMatch(pass1, pass2){
  if(pass1.value !== pass2.value){
    showError(pass2, 'Password do not match')
  }
}

// Get fieldname 
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}


// Add EventListener 
form.addEventListener('submit',function(e){
  e.preventDefault();
  checkRequired([username, email, password, password2])
  checkLength(username, 3, 15)
  checkLength(password, 6, 20)
  checkEmail(email)
  checkPasswordsMatch(password, password2)
})

















// ***** Bad practise and it's look massy ****** 
/* if(username.value === '') {
  showError(username, "Username is required")
} else {
  showSuccess(username)
}

if(email.value === '') {
  showError(email, "Email is required")
} else if(!isValidEmail(email.value)){
  showError(email, "Email is not valid")
} else {
  showSuccess(email)
}

if(password.value === '') {
  showError(password, "Password is required")
} else {
  showSuccess(password)
}

if(password2.value === '') {
  showError(password2, "Confirm password is required")
} else {
  showSuccess(password2)
} */