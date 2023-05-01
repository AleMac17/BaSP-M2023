export function changeDateFormat(date) {
    var dateParts = date.split("-");
    var day = dateParts[0];
    var month = dateParts[1];
    var year = dateParts[2];
    var newDate = month + "/" + day + "/" + year;
    return newDate;
}
export function cleanErrors(input) {
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
export function noContains(input) {
    var inputValue = input.value.toString();
    var error = document.createElement("p");
    error.classList.add("error");
    if (inputValue == "") {
        error.textContent = input.previousElementSibling.textContent+" is required";
        input.classList.add("error-input");
        input.parentNode.insertBefore(error, input.nextSibling);
        return false;
    }
    return true;
}
export function containsNumber(input) {
    var inputValue = input.value.toString();
    var error = document.createElement("p");
    error.classList.add("error");
    for (var i = 0; i < inputValue.length; i++) {
        if (isNaN(inputValue.charAt(i))) {
            error.textContent = input.previousElementSibling.textContent+" Must only contain numbers";
            input.classList.add("error-input");
            input.parentNode.insertBefore(error, input.nextSibling);
            return false;
        }
    }
    return true;
}
export function containsText(input) {
    var inputValue = input.value.toString();
    var error = document.createElement("p");
    error.classList.add("error");
    for (var i = 0; i < inputValue.length; i++) {
        if (!isNaN(inputValue.charAt(i))) {
            error.textContent = input.previousElementSibling.textContent+" Must only contain letters";
            input.classList.add("error-input");
            input.parentNode.insertBefore(error, input.nextSibling);
            return false;
        }
    }
    return true;
}
export function containsNumberAndText(input) {
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
        error.textContent = input.previousElementSibling.textContent+" Must contain numbers and letters";
        input.classList.add("error-input");
        input.parentNode.insertBefore(error, input.nextSibling);
        return false;
    } else {
        return true;
    }
}
export function containsSpecialCharacter(input) {
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
        error.textContent = input.previousElementSibling.textContent+ "does not accept special character";
        input.classList.add("error-input");
        input.parentNode.insertBefore(error, input.nextSibling);
        return response;
    } else {
        return response;
    }
}
export function lengthValidator(input, charsMin, charsMax) {
    var error = document.createElement("p");
    error.classList.add("error");
    var inputValue = input.value;
    if (inputValue.length < charsMin || inputValue.length > charsMax) {
        error.textContent = input.previousElementSibling.textContent + " Must be between "+charsMin+" and "+charsMax +" characters";
        input.classList.add("error-input");
        return input.parentNode.insertBefore(error, input.nextSibling);
    } else {
        return true;
    }
}
export function fetchGet(url) {
    return fetch(url)
        .then(function (response) {
            if(response.ok){
            return response.json();
            }else{throw new Error(response.status)}
        })
        .then(function (jsonData) {
            return jsonData;
        })
        .catch(function (error) {
            alert(error);
        });
}