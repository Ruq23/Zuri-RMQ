


const form = document.querySelector(".form");
const fName = document.querySelector("#firstName");
const lName = document.getElementById("lastName");
const email = document.getElementById("mail");
const password = document.getElementById("pwd");
const img = document.querySelector(".imgg")
const ph = document.getElementsByName('First Name')[0].placeholder





 form.addEventListener('submit', (e) => {
     e.preventDefault();

     validateInputs()
     ph.value = 'This'
 });

 const setError =(element,message) => {
    const formControl = element.parentElement;
    const errorDisplay = formControl.querySelector('.error'); 

    errorDisplay.innerText =message;
    formControl.classList.add('error')
    formControl.classList.remove('success')
 }

 const setSuccess = element => {
    const formControl = element.parentElement;
    const errorDisplay = formControl.querySelector('.error'); 

    errorDisplay.innerText = '';
    formControl.classList.add('success');
    formControl.classList.remove('error');
 };

 const validateInputs = () => {
    const firstNameValue = fName.value.trim()
    const lastNameValue = lName.value.trim() 
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()

    if(firstNameValue === '') {
        setError(firstName,'First Name cannot be empty');
    } else {
        setSuccess(fName)
    }
    if(lastNameValue === '') {
        setError(lastName,'Last Name cannot be empty');
    } else {
        setSuccess(lName)
    }
    if(emailValue === '') {
        setError(email,'Email cannot be empty');
    } else {
        setSuccess(email)
    }
    if(passwordValue === '') {
        setError(password,'Password cannot be empty');
    } else {
        setSuccess(password)
    }

 };

 








// form.addEventListener('submit', (e) => {
//     let messages = []
//     if(firstName.value === '' || firstName.value == null) {
//         messages.push('First Name cannot be empty!')
//     }
    
//     if(lastName.value === '' || firstName.value == null) {
//         messages.push('Last Name cannot be empty!')
//     }

//     if (messages.length > 0){
//         e.preventDefault()
//         errorElement.innerText = messages.join(', ')
//     }
    
// })

// form.addEventListener('submit', (e) => {
//     e.preventDefault();

// })

// function checkInputs() {
//     const firstNameValue = fName.value.trim()
//     const lastNameValue = lName.value.trim() 
//     const emailValue = email.value.trim()
//     const passwordValue = password.value.trim()

//     if(firstNameValue === ''){
//         //show error
//         // add error class
//         setErrorFor(fName, 'First Name cannot be empty!')
//     } else {
//         // add sucess class
//     }

//     // console.log(firstNameValue, lastNameValue, emailValue, passwordValue)
// }

// function setErrorFor(input, message) {
//     const formControl = input.parentElement;
//     const small = formControl.querySelector('small')

//     //add error message inside small
//     small.innerText = message;

//     //add error class
//     formControl.className = 'form-control'
// }

// document.querySelectorAll('.input-control[data-error] .input').forEach(inpEl => {
//     inpEl.addEventListener('input', () => inpEl.parentElement.removeAttribute('data-error'));
// });














