window.addEventListener("load", function () {
    var form = document.getElementById("submitForm");
    var emailData = document.getElementById("email");
    var passwordData = document.getElementById("password");

    passwordData.addEventListener("blur", function () {
        validationPassword(passwordData);
    });
    passwordData.addEventListener("focus", function () {
        clean(passwordData);
    });
    emailData.addEventListener("blur", function () {
        emailValidation(emailData);
    });
    emailData.addEventListener("focus", function () {
        clean(emailData);
    });
    form.addEventListener("submit", submitUser);

    function submitUser(e) {
        e.preventDefault();
        if (validationEmail(emailData) && validationPassword(passwordData)) {
            alert(
                "Email " + emailData.value + ",Contraseña " + passwordData.value
            );
        } else if (!emailValidation(emailData)) {
            alert("The email does not have a valid format");
        } else if (!validationPassword(passwordData)) {
            alert("The password is not valid");
        } else {
            alert("Email and password are invalid");
        }
    }

    function clean(input) {
        while (
            input.nextSibling &&
            input.nextSibling.nodeType === Node.ELEMENT_NODE
        )
            if (
                input.nextSibling &&
                input.nextSibling.nodeType === Node.ELEMENT_NODE
            ) {
                input.parentNode.removeChild(input.nextSibling);
                input.classList.add("error-input");
            }
    }
    function noContains(input) {
        var inputNumber = input.value.toString();
        var error = document.createElement("p");
        error.classList.add("error");
        if (inputNumber == "") {
            error.textContent = "Error, there is no input";
            input.classList.add("error-input");
            input.parentNode.insertBefore(error, input.nextSibling);
            return false;
        }
        return true;
    }
    function containsNumberAndText(input) {
        var containsNumber = false;
        var containsText = false;
        var inputString = input.value.toString();
        var error = document.createElement("p");
        error.classList.add("error");
        for (var i = 0; i < inputString.length; i++) {
            if (!isNaN(inputString.charAt(i))) {
                containsNumber = true;
            } else {
                containsText = true;
            }
        }
        if (!containsNumber || !containsText) {
            error.textContent = "Must contain numbers and letters";
            input.classList.add("error-input");
            input.parentNode.insertBefore(error, input.nextSibling);
            return false;
        } else {
            return true;
        }
    }
    function containsSpecialCharacter(input) {
        var response = true;
        var error = document.createElement("p");
        error.classList.add("error");
        var specialCharacters = "/[!@#$%^&*()_+-=[]{};':\\|,.<>/?]+/";
        var inputNumber = input.value.toString();
        for (var i = 0; i < inputNumber.length; i++) {
            if (specialCharacters.indexOf(inputNumber.charAt(i)) != -1) {
                response = true;
                continue;
            } else {
                response = false;
            }
        }
        if (response == true) {
            error.textContent = "Error, there is a special character";
            input.classList.add("error-input");
            input.parentNode.insertBefore(error, input.nextSibling);
            return response;
        } else {
            return response;
        }
    }
    function lengthValidator(input, charsMin, charsMax) {
        var error = document.createElement("p");
        error.classList.add("error");
        var inputNumber = input.value;
        if (inputNumber.length < charsMin || inputNumber.length > charsMax) {
            error.textContent = "More or less characters";
            input.classList.add("error-input");
            return input.parentNode.insertBefore(error, input.nextSibling);
        } else {
            return true;
        }
    }
    function validationEmail(input) {
        var error = document.createElement("p");
        error.textContent = "The email does not have a valid format";
        error.classList.add("error");
        clean(input);
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
        if (
            noContains(input) &&
            lengthValidator(input, 7, 30) &&
            !containsSpecialCharacter(input) &&
            containsNumberAndText(input)
        ) {
            input.classList.remove("error-input");
            return true;
        } else {
            return false;
        }
    }
});
