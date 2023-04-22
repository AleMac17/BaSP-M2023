window.addEventListener("load", function () {
    var form = document.getElementById("submitForm");
    var emailData = document.getElementById("email");
    var passwordData = document.getElementById("password");

    passwordData.addEventListener("blur", function () {
        validation(passwordData, 7, 99, true, true);
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
        ) {
            alert("Email " + emailData.value + ",Contraseña " + passwordData.value);
        } else {
            alert("Error");
        }
    }
    

    function emailValidation(input){
        var error = document.createElement("p");
        error.textContent = "El email no tiene un formato válido";
        error.classList.add("error");
        input.parentNode.removeChild(input.nextSibling);
        var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
        if(!emailExpression.test(input.value)){
            alert("El email no tiene un formato valido");
            input.parentNode.insertBefore(error, input.nextSibling);
        }else{
            console.log("Todo correcto")
            return true
        }
    }
    function clean(input) {
        input.style.backgroundColor = "";
    }
    function containsNumber(input) {
        for (let i = 0; i < input.length; i++) {
            if (!isNaN(input.charAt(i))) {
                return true;
            }
        }
        return false;
    }
    function containsText(input) {
        for (let i = 0; i < input.length; i++) {
            if (isNaN(input.charAt(i))) {
                return true;
            }
        }
        return false;
    }
    function validation(input, charsMin, charsMax, number, text, both) {
        var error = document.createElement("p");
        error.classList.add("error");
        input.parentNode.removeChild(input.nextSibling);
        var inputValue = input.value;
        var inputNumero = input.value.toString();
        if (inputValue == "") {
            error.textContent = "Error, no hay dato";
            return input.parentNode.insertBefore(error, input.nextSibling);
        } else {
            if (
                inputNumero.length < charsMin ||
                inputNumero.length > charsMax
            ) {
                error.textContent = "Caracteres de mas o de menos";
                return input.parentNode.insertBefore(error, input.nextSibling);
            } else if (both) {
                if (
                    !containsNumber(inputNumero) ||
                    !containsText(inputNumero)
                ) {         
                    error.textContent = "Debe contener al menos una letra y un número";
                    return input.parentNode.insertBefore(error, input.nextSibling);
                }
            } else if (number) {
                if (!containsNumber(inputNumero)) {
                    error.textContent = "Debe contener al menos un número";
                    return input.parentNode.insertBefore(error, input.nextSibling);
                }
            } else if (text) {
                if (!containsText(inputNumero)) {
                    error.textContent = "Debe contener al menos una letra";
                    return input.parentNode.insertBefore(error, input.nextSibling);
                }
            }
        }
        console.log("Paso todo");
        return true;
    }
})