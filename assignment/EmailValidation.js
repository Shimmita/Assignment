class EmailPasswordValidator {
    // Static method that validates an email address

    static validateEmail(email) {
        //defining a regular expression matching syntax and returns true if the email is valid 
        const allowedEmailRegularExpression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        return allowedEmailRegularExpression.test(email);
    }

    // Static method that validate a password (minimum length of 6 characters)
    static validatePassword(password) {
        return password.length >= 6;
    }
}

// testing details for email and password
const email = "shimiatadouglas@gmail.com";
const password = "maseno123";

if (EmailPasswordValidator.validateEmail(email)) {
    console.log("This Email Is Valid.");
} else {
    console.log("This Email is not valid.");
}

if (EmailPasswordValidator.validatePassword(password)) {
    console.log("This Password is valid.");
} else {
    console.log("This Password is not valid.");
}
