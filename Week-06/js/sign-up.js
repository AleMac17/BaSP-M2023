window.addEventListener("load", function () {
    var form = document.getElementById("submitForm");
    var nameData = document.getElementById("name");
    var lastNameData = document.getElementById("lastName");
    var dniData = document.getElementById("dni");
    var birthdateData = document.getElementById("birthdate");
    var phoneNumberData = document.getElementById("phoneNumber");
    var addressData = document.getElementById("address");
    var locationData = document.getElementById("location");
    var postalCodeData = document.getElementById("postalCode");
    var emailData = document.getElementById("email");
    var passwordData = document.getElementById("password");
    var rPasswordData = document.getElementById("rPassword");

    nameData.addEventListener("blur", function () {
        validationNameData(nameData);
    });
    nameData.addEventListener("focus", function () {
        cleanErrors(nameData);
    });
    lastNameData.addEventListener("blur", function () {
        validationNameData(lastNameData);
    });
    lastNameData.addEventListener("focus", function () {
        cleanErrors(lastNameData);
    });
    birthdateData.addEventListener("blur", function () {
        validationBirthdate(birthdateData);
    });
    birthdateData.addEventListener("focus", function () {
        cleanErrors(birthdateData);
    });
    dniData.addEventListener("blur", function () {
        validationDni(dniData);
    });
    dniData.addEventListener("focus", function () {
        cleanErrors(dniData);
    });
    phoneNumberData.addEventListener("blur", function () {
        validationPhoneNumber(phoneNumberData);
    });
    phoneNumberData.addEventListener("focus", function () {
        cleanErrors(phoneNumberData);
    });
    addressData.addEventListener("blur", function () {
        validationAddress(addressData);
    });
    addressData.addEventListener("focus", function () {
        cleanErrors(addressData);
    });
    locationData.addEventListener("blur", function () {
        validationLocation(locationData);
    });
    locationData.addEventListener("focus", function () {
        cleanErrors(locationData);
    });
    postalCodeData.addEventListener("blur", function () {
        validationPostalCode(postalCodeData);
    });
    postalCodeData.addEventListener("focus", function () {
        cleanErrors(postalCodeData);
    });
    passwordData.addEventListener("blur", function () {
        validationPassword(passwordData);
    });
    passwordData.addEventListener("focus", function () {
        cleanErrors(passwordData);
    });
    rPasswordData.addEventListener("blur", function () {
        validationRPassword(rPasswordData);
    });
    rPasswordData.addEventListener("focus", function () {
        cleanErrors(rPasswordData);
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
        validationNameData(nameData);
        validationNameData(lastNameData);
        validationDni(dniData);
        validationPhoneNumber(phoneNumberData);
        validationAddress(addressData);
        validationLocation(locationData);
        validationEmail(emailData);
        validationPostalCode(postalCodeData);
        validationPassword(passwordData);
        validationBirthdate(birthdateData);
        validationRPassword(rPasswordData);
        if (
            !validationNameData(nameData) ||
            !validationNameData(lastNameData) ||
            !validationDni(dniData) ||
            !validationPhoneNumber(phoneNumberData) ||
            !validationAddress(addressData) ||
            !validationLocation(locationData) ||
            !validationEmail(emailData) ||
            !validationPostalCode(postalCodeData) ||
            !validationPassword(passwordData) ||
            !validationBirthdate(birthdateData) ||
            passwordData.value != rPasswordData.value
        ) {
            alert("Error");
        } else {
            alert(
                "Nombre: " +
                    nameData.value +
                    "\nApellido: " +
                    lastNameData.value +
                    "\nDNI: " +
                    dniData.value +
                    "\nBirthdate: " +
                    changeDateFormat(birthdateData.value) +
                    "\nPhone number:  " +
                    phoneNumberData.value +
                    "\nAddress: " +
                    addressData.value +
                    "\nLocation: " +
                    locationData.value +
                    "\nPostal Code: " +
                    postalCodeData.value +
                    "\nE-mail: " +
                    emailData.value +
                    "\nPassword: " +
                    passwordData.value +
                    "\nRePassword: " +
                    rPasswordData.value
            );
        }
    }
    function changeDateFormat(date) {
        var dateParts = date.split("-");
        var day = dateParts[0];
        var month = dateParts[1];
        var year = dateParts[2];
        var newDate = year + "/" + month + "/" + day;
        return newDate;
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
    function containsNumber(input) {
        var inputValue = input.value.toString();
        var error = document.createElement("p");
        error.classList.add("error");
        for (var i = 0; i < inputValue.length; i++) {
            if (isNaN(inputValue.charAt(i))) {
                error.textContent = "Must only contain numbers";
                input.classList.add("error-input");
                input.parentNode.insertBefore(error, input.nextSibling);
                return false;
            }
        }
        return true;
    }
    function containsText(input) {
        var inputValue = input.value.toString();
        var error = document.createElement("p");
        error.classList.add("error");
        for (var i = 0; i < inputValue.length; i++) {
            if (!isNaN(inputValue.charAt(i))) {
                error.textContent = "Must only contain letters";
                input.classList.add("error-input");
                input.parentNode.insertBefore(error, input.nextSibling);
                return false;
            }
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
    function validationNameData(input) {
        cleanErrors(input);
        if (
            noContains(input) &&
            lengthValidator(input, 3, 30) &&
            containsText(input) &&
            !containsSpecialCharacter(input)
        ) {
            input.classList.remove("error-input");
            return true;
        } else {
            return false;
        }
    }
    function validationDni(input) {
        cleanErrors(input);
        if (
            noContains(input) &&
            lengthValidator(input, 3, 30) &&
            containsNumber(input) &&
            !containsSpecialCharacter(input)
        ) {
            input.classList.remove("error-input");
            return true;
        } else {
            return false;
        }
    }
    function validationPhoneNumber(input) {
        cleanErrors(input);
        if (
            noContains(input) &&
            lengthValidator(input, 9, 11) &&
            containsNumber(input) &&
            !containsSpecialCharacter(input)
        ) {
            input.classList.remove("error-input");
            return true;
        } else {
            return false;
        }
    }
    function validationLocation(input) {
        cleanErrors(input);
        if (
            noContains(input) &&
            lengthValidator(input, 3, 30) &&
            !containsSpecialCharacter(input)
        ) {
            input.classList.remove("error-input");
            return true;
        } else {
            return false;
        }
    }
    function validationPostalCode(input) {
        cleanErrors(input);
        if (
            noContains(input) &&
            lengthValidator(input, 3, 6) &&
            containsNumber(input) &&
            !containsSpecialCharacter(input)
        ) {
            input.classList.remove("error-input");
            return true;
        } else {
            return false;
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
    function validationRPassword(input) {
        cleanErrors(input);
        if (noContains(input) && input.value != passwordData.value) {
            if (input.value == passwordData.value) {
                input.classList.remove("error-input");
                return true;
            } else {
                input.classList.remove("error-input");
                var error = document.createElement("p");
                error.classList.add("error");
                error.textContent = "Is not the same password";
                input.classList.add("error-input");
                input.parentNode.insertBefore(error, input.nextSibling);
                return false;
            }
        } else {
            return false;
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
    function validationBirthdate(input) {
        cleanErrors(input);
        if (!noContains(input)) {
            return false;
        } else {
            return true;
        }
    }
    function validationAddress(input) {
        cleanErrors(input);
        var spaceUbication = input.value.indexOf(" ");
        if (
            noContains(input) &&
            lengthValidator(input, 4, 30) &&
            !containsSpecialCharacter(input) &&
            containsNumberAndText(input)
        ) {
            if (spaceUbication != -1) {
                input.classList.remove("error-input");
                return true;
            } else {
                var error = document.createElement("p");
                error.classList.add("error");
                error.textContent = "Must contain a space";
                input.classList.add("error-input");
                input.parentNode.insertBefore(error, input.nextSibling);
                return false;
            }
        } else {
            return false;
        }
    }
});
