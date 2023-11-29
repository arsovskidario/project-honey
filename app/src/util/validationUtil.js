
function isEmptyOrNull(str) {
    return !str || str.trim() === '';
}

function isEmailValid(email) {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
}

function isPasswordValidFormat(password) {
    var re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[~`!@#\$%\^&\*\(\)_\+\-=\{\}\[\]\|\\:;"'<>,\./?]).{8,}$/;
    return re.test(password);
}

function isPasswordConfirmationCorrect(password, confirmationPassword) {
    return password == confirmationPassword;
}

function isNumeric(value) {
    return /^-?\d+$/.test(value);
}

export const validateFields = (fields) => {
    const errors = {};

    if ('email' in fields && !isEmailValid(fields['email'])) {
        errors['email'] = 'Provided email is not valid!';
    }

    if ('password' in fields && !isPasswordValidFormat(fields['password'])) {
        errors['password'] = 'Please enter a password with min 8 letter, with at least a symbol[~`!@#$%^&*()-_+={}[]|\;:"<>,./?], upper and lower case letters and a number!';
    }


    if ('passwordConfirmation' in fields && !isPasswordConfirmationCorrect(fields['password'], fields['passwordConfirmation'])) {
        errors['passwordConfirmation'] = "Passwords don't match!";
    }


    if ('firstName' in fields && isEmptyOrNull(fields['firstName'])) {
        errors['firstName'] = 'Please enter your first name in order to continue!';
    }

    if ('lastName' in fields && isEmptyOrNull(fields['lastName'])) {
        errors['lastName'] = 'Please enter your last name in order to continue!';
    }


    if ('address' in fields && isEmptyOrNull(fields['address'])) {
        errors['address'] = 'Please enter your address in order to continue!';
    }

    if ('city' in fields && isEmptyOrNull(fields['city'])) {
        errors['city'] = 'Please enter your city in order to continue!';
    }

    if ('phoneNumber' in fields && !isNumeric(fields['phoneNumber'])) {
        errors['phoneNumber'] = 'Please enter a valid phone number!';
    }

    if ('loginPassword' in fields && isEmptyOrNull(fields['loginPassword'])) {
        errors['loginPassword'] = 'Please enter your password!';
    }

    return errors;

}

export const hasErrors = (errors) => {
    return Object.keys(errors).length !== 0
}

export const hasErrorInput = (errors, input) => {
    return errors.hasOwnProperty(input)
}