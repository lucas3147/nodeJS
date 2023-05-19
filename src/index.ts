import validator from 'validator';

let email: string = 'lucas.souza3146@gmail.com'

if (validator.isEmail(email)) {
    console.log(`a string ${email} é um email`);
} else {
    console.log(`a string ${email} não é um email`);
}