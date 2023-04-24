window.addEventListener("load", function () {
    var form = document.getElementById("submitForm");
    var emailData = document.getElementById("email");
    var passwordData = document.getElementById("password");

    passwordData.addEventListener("blur", function () {
        validation(passwordData, 7, 99, true, true,true);
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
        if (
            emailValidation(emailData) &&
            validation(passwordData, 7, 99, true, true,true)
        ){
            alert("Email " + emailData.value + ",Contraseña " + passwordData.value);
        } else if (!emailValidation(emailData)) {
            alert("The email does not have a valid format");
        } else if (!validation(passwordData, 7, 99, true, true,true)){
            alert("The password is not valid");
        } else{
            alert("Email and password are invalid");
        }
    }
    function emailValidation(input){
        var error = document.createElement("p");
        error.textContent = "The email does not have a valid format";
        error.classList.add("error");
        if (input.nextSibling && input.nextSibling.nodeType === Node.ELEMENT_NODE) {
            input.parentNode.removeChild(input.nextSibling);
            input.style.border = "2px solid red";
        }
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
        input.style.backgroundColor = "";
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
})