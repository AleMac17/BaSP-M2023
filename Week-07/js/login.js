import * as utils  from './util.js';
window.addEventListener("load", function () {
    var form = document.getElementById("submitForm");
    var emailData = document.getElementById("email");
    var passwordData = document.getElementById("password");

    passwordData.addEventListener("blur", function () {
        validationPassword(passwordData);
    });
    passwordData.addEventListener("focus", function () {
        utils.cleanErrors(passwordData);
    });
    emailData.addEventListener("blur", function () {
        validationEmail(emailData);
    });
    emailData.addEventListener("focus", function () {
        utils.cleanErrors(emailData);
    });
    form.addEventListener("submit", submitUser);

    function submitUser(e) {
        e.preventDefault();
        if (validationEmail(emailData) && validationPassword(passwordData)) {
            alert(
                "Email: " +
                    emailData.value +
                    "\nPassword: " +
                    passwordData.value
            );
        } else if (
            !validationEmail(emailData) &&
            !validationPassword(passwordData)
        ) {
            alert("Email and password are invalid");
        } else if (!validationEmail(emailData)) {
            alert("The email does not have a valid format");
        } else if (!validationPassword(passwordData)) {
            alert("The password is not valid");
        }
    }
    function validationEmail(input) {
        var error = document.createElement("p");
        error.textContent = "The email does not have a valid format";
        error.classList.add("error");
        utils.cleanErrors(input);
        var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
        if (!emailExpression.test(input.value)) {
            input.parentNode.insertBefore(error, input.nextSibling);
            input.classList.add("error-input");
        } else {
            input.classList.remove("error-input");
            return true;
        }
    }
    function validationPassword(input) {
        utils.cleanErrors(input);
        if (
            utils.noContains(input) &&
            utils.lengthValidator(input, 7, 30) &&
            !utils.containsSpecialCharacter(input) &&
            utils.containsNumberAndText(input)
        ) {
            input.classList.remove("error-input");
            return true;
        } else {
            return false;
        }
    }
});
