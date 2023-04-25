window.addEventListener("load", function () {
    var form = document.getElementById("submitForm");
    var emailData = document.getElementById("email");
    var passwordData = document.getElementById("password");

    passwordData.addEventListener("blur", function () {
        validationPassword(passwordData);
    });
    passwordData.addEventListener("focus", function () {
        cleanErrors(passwordData);
    });
    emailData.addEventListener("blur", function () {
        validationEmail(emailData);
    });
    emailData.addEventListener("focus", function () {
        cleanErrors(emailData);
    });
    form.addEventListener("submit", submitUser);

    function submitUser(e) {
        e.preventDefault();
        if (validationEmail(emailData) && validationPassword(passwordData)) {
            alert(
                "Email: " + emailData.value + "\nContraseña: " + passwordData.value
            );
        }else if(!validationEmail(emailData) && !validationPassword(passwordData)){
            alert("Email and password are invalid");
        } else if (!validationEmail(emailData)) {
            alert("The email does not have a valid format");
        } else if (!validationPassword(passwordData)) {
            alert("The password is not valid");
        } 
    }

    function cleanErrors(input) {
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
        var inputValue = input.value.toString();
        var error = document.createElement("p");
        error.classList.add("error");
        if (inputValue == "") {
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
        var inputValue = input.value.toString();
        for (var i = 0; i < inputValue.length; i++) {
            if (specialCharacters.indexOf(inputValue.charAt(i)) != -1) {
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
        var inputValue = input.value;
        if (inputValue.length < charsMin || inputValue.length > charsMax) {
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
        cleanErrors(input);
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
        cleanErrors(input);
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
