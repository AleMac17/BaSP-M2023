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
        validation(nameData, 3, 99, false, true,false);
    });
    nameData.addEventListener("focus", function () {
        clean(nameData);
    });
    lastNameData.addEventListener("blur", function () {
        validation(lastNameData, 3, 99, false, true,false);
    });
    lastNameData.addEventListener("focus", function () {
        clean(lastNameData);
    });
    birthdateData.addEventListener("blur",function(){
        console.log(birthdateData.value);
        if (birthdateData.nextSibling && birthdateData.nextSibling.nodeType === Node.ELEMENT_NODE) {
            birthdateData.parentNode.removeChild(birthdateData.nextSibling);
            birthdateData.style.border = "2px solid red";
        }
        if(birthdateData.value == ""){
            var error = document.createElement("p");
            error.classList.add("error");
            error.textContent = "Error, there is no input";
            birthdateData.style.border = "2px solid red";
            return birthdateData.parentNode.insertBefore(error, birthdateData.nextSibling);
        }else{
            clean(birthdateData)
            return true
        }}
    )
    dniData.addEventListener("blur", function () {
        validation(dniData, 7, 99, true, false,false);
    });
    dniData.addEventListener("focus", function () {
        clean(dniData);
    });
    phoneNumberData.addEventListener("blur", function () {
        validation(phoneNumberData, 9, 11, true, false,false);
    });
    phoneNumberData.addEventListener("focus", function () {
        clean(phoneNumberData);
    });
    addressData.addEventListener("blur", function () {
        validationAddress(addressData);
    });
    addressData.addEventListener("focus", function () {
        clean(addressData);
    });
    locationData.addEventListener("blur", function () {
        validation(locationData, 3, 99, false, false,false);
    });
    locationData.addEventListener("focus", function () {
        clean(locationData);
    });
    postalCodeData.addEventListener("blur", function () {
        validation(postalCodeData, 3, 6, true, false,false);
    });
    postalCodeData.addEventListener("focus", function () {
        clean(postalCodeData);
    });
    passwordData.addEventListener("blur", function () {
        validation(passwordData, 7, 99, true, true,true);
    });
    passwordData.addEventListener("focus", function () {
        clean(passwordData);
    });

    form.addEventListener("submit", submitUser);

    function submitUser(e) {
        e.preventDefault();
        if (
            validation(nameData, 3, 99, false, true) &&
            validation(lastNameData, 3, 99, false, true) &&
            validation(dniData, 7, 99, true, false) &&
            validation(phoneNumberData, 9, 11, true, false) &&
            validation(addressData, 4, 99, true, true) &&
            validation(locationData, 3, 99, true, true) &&
            validation(postalCodeData, 3, 6, true, false) &&
            validation(passwordData, 7, 99, true, true) &&
            passwordData.value == rPasswordData.value &&
            birthdateData.value != ""
        ) {
            alert(
                "Nombre " + nameData.value + ",Apellido " + lastNameData.value
            );
        } else {
            alert("Error");
        }
    }
    function emailValidation(input){
        var error = document.createElement("p");
        error.textContent = "The email does not have a valid format";
        error.classList.add("error");
        input.parentNode.removeChild(input.nextSibling);
        var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
        if(!emailExpression.test(input.value)){
            input.parentNode.insertBefore(error, input.nextSibling);
            input.style.border = "2px solid red";
        }else{
            input.style.border = "1px solid black";
            return true
        }
    }
    function clean(input) {
        input.style.border = "1px solid black";
    }
    function containsNumber(input) {
        for (var i = 0; i < input.length; i++) {
            if (!isNaN(input.charAt(i))) {
                continue;
            }return true;
        }return false;
    }
    function containsText(input) {
        for (var i = 0; i < input.length; i++) {
            if (isNaN(input.charAt(i))) {
                continue;
            }return true;
        }return false;
    }
    function containsSpecialCharacter(input) {
        var specialCharacters = "/[!@#$%^&*()_+\-=\[\]{};':\\|,.<>\/?]+/";
        for (var i = 0; i < input.length; i++) {
            if (specialCharacters.indexOf(input.charAt(i)) != -1) {
                return true;
            }
        }
        return false;
    }
    function validation(input, charsMin, charsMax, number, text, both) {
        var error = document.createElement("p");
        error.classList.add("error");
        if (input.nextSibling && input.nextSibling.nodeType === Node.ELEMENT_NODE) {
            input.parentNode.removeChild(input.nextSibling);
            input.style.border = "2px solid red";
        }
        var inputValue = input.value;
        var inputNumber = input.value.toString();
        if (inputValue == "") {
            error.textContent = "Error, there is no input";
            input.style.border = "2px solid red";
            return input.parentNode.insertBefore(error, input.nextSibling);
        } else if (containsSpecialCharacter(inputNumber)){
            error.textContent = "Error, there is a special character";
            input.style.border = "2px solid red";
            return input.parentNode.insertBefore(error, input.nextSibling);
        } 
        else {
            if (inputNumber.length < charsMin ||inputNumber.length > charsMax){
                error.textContent = "More or less characters";
                input.style.border = "2px solid red";
                return input.parentNode.insertBefore(error, input.nextSibling);
            } else if (both) {
                if (!containsNumber(inputNumber) || !containsText(inputNumber)) {         
                    error.textContent = "Must contain at least one letter and one number";
                    input.style.border = "2px solid red";
                    return input.parentNode.insertBefore(error, input.nextSibling);
                }
            } else if (number) {
                if (containsNumber(inputNumber)) {
                    error.textContent = "Must contain only numbers";
                    input.style.border = "2px solid red";
                    return input.parentNode.insertBefore(error, input.nextSibling);
                }
            } else if (text) {
                if (containsText(inputValue)) {
                    error.textContent = "Must contain only letters";
                    input.style.border = "2px solid red";
                    return input.parentNode.insertBefore(error, input.nextSibling);
                }
            }
        }
        input.style.border = "1px solid black";
        return true;
    }
    /*function validationAddress(input) {
        var response;
        var error = document.createElement("p");
        error.classList.add("error");
        if (input.nextSibling && input.nextSibling.nodeType === Node.ELEMENT_NODE){
            input.parentNode.removeChild(input.nextSibling);
            input.style.border = "2px solid red";
        }
        var inputNumber = input.value.toString();
        if (inputNumber.indexOf(" ") != -1) {
            response = true;
            for (var i = inputNumber.indexOf(" "); i < inputNumber.length;i++) {
                if (isNaN(inputNumber.charAt(i))) {
                    error.textContent = "Must contain only letters";
                    input.style.border = "2px solid red";
                    input.parentNode.insertBefore(error, input.nextSibling);
                    response = false;
                    return response;
                } else {
                    for (var o = inputNumber.indexOf(" "); o > 0; o--) {
                        if (!isNaN(inputNumber.charAt(o))) {
                            error.textContent = "Must contain only numbers";
                            input.style.border = "2px solid red";
                            input.parentNode.insertBefore(error, input.nextSibling);
                            response = false;
                            return response;
                        }
                    }
                }
                return response;
            }
        } else {
            error.textContent = "Must contain only numbers";
            input.style.border = "2px solid red";
            input.parentNode.insertBefore(error, input.nextSibling);
            return response;
        }
    }*/
});
