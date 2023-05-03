import * as utils from "./util.js";
window.addEventListener("load", function () {
    var form = document.getElementById("submitForm");
    var emailData = document.getElementById("email");
    var passwordData = document.getElementById("password");
    var url = "https://api-rest-server.vercel.app/login";

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
        fetchGet(queryData());
    }
    function queryData() {
        var params = new URLSearchParams({
            email: emailData.value,
            password: passwordData.value,
        });
        var requestUrl = url + "?" + params.toString();
        return requestUrl;
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
    function fetchGet(url) {
        return fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (jsonData) {
                var msg = "";
                if (jsonData.success) {
                    return alert(
                        "Login: " + jsonData.success + "\n" + jsonData.msg
                    );
                }
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
                return alert(error);
            });
    }
});
