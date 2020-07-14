//	This academic exercise was made based on the tutorial from
//	https://www.javascripttutorial.net/javascript-dom/javascript-form/
//	variables, classes and others were changed to fit the assignment requirements and understand the process, construction and logic of the code



function error(input, message) {
    input.className = 'mistake';
    // Show the error message
    const mistake = input.previousElementSibling;
//    mistake.innerText = message;
	document.getElementById('small').innerText = message;
    return false;
}
const mistake = input.previousElementSibling;
mistake.innerText = message;

function success(input) {
    input.className = 'success';
    // hide the mistake message
    const mistake = input.previousElementSibling;
    mistake.innerText = '';
    return true;
}

function requireValue(input, message) {
    return input.value.trim() === '' ?
        error(input, message) :
        success(input);
}

function validateEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(input.value.trim()) ?
        success(input) :
        error(input, 'Invalid email format');
}

//Gets the form from the html
const form = document.getElementById('contact');

// Gets the elements from the form
const name = form.elements[0];
const email = form.elements[1];
const mensaje = form.elements[2];

//Builds the object
const requiredFields = [
    {input: 	name, 
	 message: 	'Do not forget our name!'},
    {input: 	email,
	 message: 	'Afraid of sharing your email?'},
	{input: 	mensaje,
	 message: 	'What is your message?'}
];


document.addEventListener('click', (event) => {
    // check required fields
    let valid = true;
    requiredFields.forEach((input) => {
        valid = requireValue(input.input, input.message);
    });
    // validate email
    if (valid) {
        valid = validateEmail(email);
    }
    // stop submitting the form if the data is invalid
    if (!valid) {
        event.preventDefault();
    }
});
