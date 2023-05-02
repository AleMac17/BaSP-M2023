import * as utils from "./util.js";
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
    var repeatPasswordData = document.getElementById("repeatPassword");
    var url = "https://api-rest-server.vercel.app/signup";

    if (localStorage.hasOwnProperty("email")) {
        emailData.setAttribute("value", localStorage.getItem("email"));
        nameData.setAttribute("value", localStorage.getItem("name"));
        lastNameData.setAttribute("value", localStorage.getItem("lastName"));
        dniData.setAttribute("value", localStorage.getItem("dni"));
        phoneNumberData.setAttribute("value", localStorage.getItem("phone"));
        addressData.setAttribute("value", localStorage.getItem("address"));
        locationData.setAttribute("value", localStorage.getItem("city"));
        postalCodeData.setAttribute("value", localStorage.getItem("zip"));
        passwordData.setAttribute("value", localStorage.getItem("password"));
        repeatPasswordData.setAttribute(
            "value",
            localStorage.getItem("repeatPassword")
        );
        birthdateData.setAttribute("value", localStorage.getItem("dob"));
    }

    nameData.addEventListener("blur", function () {
        validationNameData(nameData);
    });
    nameData.addEventListener("focus", function () {
        utils.cleanErrors(nameData);
    });
    lastNameData.addEventListener("blur", function () {
        validationNameData(lastNameData);
    });
    lastNameData.addEventListener("focus", function () {
        utils.cleanErrors(lastNameData);
    });
    birthdateData.addEventListener("blur", function () {
        validationBirthdate(birthdateData);
    });
    birthdateData.addEventListener("focus", function () {
        utils.cleanErrors(birthdateData);
    });
    dniData.addEventListener("blur", function () {
        validationDni(dniData);
    });
    dniData.addEventListener("focus", function () {
        utils.cleanErrors(dniData);
    });
    phoneNumberData.addEventListener("blur", function () {
        validationPhoneNumber(phoneNumberData);
    });
    phoneNumberData.addEventListener("focus", function () {
        utils.cleanErrors(phoneNumberData);
    });
    addressData.addEventListener("blur", function () {
        validationAddress(addressData);
    });
    addressData.addEventListener("focus", function () {
        utils.cleanErrors(addressData);
    });
    locationData.addEventListener("blur", function () {
        validationLocation(locationData);
    });
    locationData.addEventListener("focus", function () {
        utils.cleanErrors(locationData);
    });
    postalCodeData.addEventListener("blur", function () {
        validationPostalCode(postalCodeData);
    });
    postalCodeData.addEventListener("focus", function () {
        utils.cleanErrors(postalCodeData);
    });
    passwordData.addEventListener("blur", function () {
        validationPassword(passwordData);
    });
    passwordData.addEventListener("focus", function () {
        utils.cleanErrors(passwordData);
    });
    repeatPasswordData.addEventListener("blur", function () {
        validationrepeatPassword(repeatPasswordData);
    });
    repeatPasswordData.addEventListener("focus", function () {
        utils.cleanErrors(repeatPasswordData);
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
        fetchGet(queryData());
    }

    function queryData() {
        var name = encodeURIComponent(nameData.value);
        var lastName = encodeURIComponent(lastNameData.value);
        var dni = encodeURIComponent(dniData.value);
        var phone = encodeURIComponent(phoneNumberData.value);
        var address = encodeURIComponent(addressData.value);
        var city = encodeURIComponent(locationData.value);
        var email = encodeURIComponent(emailData.value);
        var zip = encodeURIComponent(postalCodeData.value);
        var password = encodeURIComponent(passwordData.value);
        var dob = encodeURIComponent(
            utils.changeDateFormat(birthdateData.value)
        );
        var params =
            "name=" +
            name +
            "&lastName=" +
            lastName +
            "&dni=" +
            dni +
            "&phone=" +
            phone +
            "&address=" +
            address +
            "&city=" +
            city +
            "&email=" +
            email +
            "&zip=" +
            zip +
            "&password=" +
            password +
            "&dob=" +
            dob;
        var requestUrl = url + "?" + params;
        return requestUrl;
    }
    function validationNameData(input) {
        utils.cleanErrors(input);
        if (
            utils.noContains(input) &&
            utils.lengthValidator(input, 3, 30) &&
            utils.containsText(input) &&
            !utils.containsSpecialCharacter(input)
        ) {
            input.classList.remove("error-input");
            return true;
        } else {
            return false;
        }
    }
    function validationDni(input) {
        utils.cleanErrors(input);
        if (
            utils.noContains(input) &&
            utils.lengthValidator(input, 3, 30) &&
            utils.containsNumber(input) &&
            !utils.containsSpecialCharacter(input)
        ) {
            input.classList.remove("error-input");
            return true;
        } else {
            return false;
        }
    }
    function validationPhoneNumber(input) {
        utils.cleanErrors(input);
        if (
            utils.noContains(input) &&
            utils.lengthValidator(input, 10, 10) &&
            utils.containsNumber(input) &&
            !utils.containsSpecialCharacter(input)
        ) {
            input.classList.remove("error-input");
            return true;
        } else {
            return false;
        }
    }
    function validationLocation(input) {
        utils.cleanErrors(input);
        if (
            utils.noContains(input) &&
            utils.lengthValidator(input, 3, 30) &&
            !utils.containsSpecialCharacter(input)
        ) {
            input.classList.remove("error-input");
            return true;
        } else {
            return false;
        }
    }
    function validationPostalCode(input) {
        utils.cleanErrors(input);
        if (
            utils.noContains(input) &&
            utils.lengthValidator(input, 3, 6) &&
            utils.containsNumber(input) &&
            !utils.containsSpecialCharacter(input)
        ) {
            input.classList.remove("error-input");
            return true;
        } else {
            return false;
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
    function validationrepeatPassword(input) {
        utils.cleanErrors(input);
        if (utils.noContains(input) && input.value == passwordData.value) {
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
    function validationBirthdate(input) {
        utils.cleanErrors(input);
        if (!utils.noContains(input)) {
            return false;
        } else {
            return true;
        }
    }
    function validationAddress(input) {
        utils.cleanErrors(input);
        var spaceUbication = input.value.indexOf(" ");
        if (
            utils.noContains(input) &&
            utils.lengthValidator(input, 4, 30) &&
            !utils.containsSpecialCharacter(input) &&
            utils.containsNumberAndText(input)
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
    function createLocalUser() {
        localStorage.setItem("email", emailData.value);
        localStorage.setItem("name", nameData.value);
        localStorage.setItem("lastName", lastNameData.value);
        localStorage.setItem("dni", dniData.value);
        localStorage.setItem("phone", phoneNumberData.value);
        localStorage.setItem("address", addressData.value);
        localStorage.setItem("city", locationData.value);
        localStorage.setItem("zip", postalCodeData.value);
        localStorage.setItem("password", passwordData.value);
        localStorage.setItem("repeatPassword", repeatPasswordData.value);
        localStorage.setItem("dob", birthdateData.value);
    }
    function fetchGet(url) {
        return fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (jsonData) {
                if (jsonData.success) {
                    createLocalUser()
                    return alert(
                        "Login: " + jsonData.success + "\n" + jsonData.msg
                    );
                }
                var msg;
                if (jsonData.errors) {
                    for (var i = 0; i < jsonData.errors.length; i++) {
                        console.log(msg);
                        msg +=
                            "\nThe " +
                            jsonData.errors[i].param +
                            ": " +
                            jsonData.errors[i].value +
                            "\nHas the following error: " +
                            jsonData.errors[i].msg;
                    }
                    throw new Error(msg);
                }
                throw new Error(jsonData.msg);
            })
            .catch(function (error) {
                console.log(error);
                return alert(error);
            });
    }
});
