window.addEventListener('load', function(){

var form = document.getElementById('submitForm');
var nameData = document.getElementById('name');
var lastNameData = document.getElementById('lastName');
var dniData = document.getElementById('dni');
var birthdateData = document.getElementById('birthdate');
var phoneNumberData = document.getElementById('phoneNumber');
var addressData = document.getElementById('address');
var locationData = document.getElementById('location');
var postalCodeData = document.getElementById('postalCode');
var emailData = document.getElementById('email');
var passwordData = document.getElementById('password');
var rPasswordData = document.getElementById('rPassword');

nameData.addEventListener('blur',function(){
    validation(nameData,3,99,false,true)
});
nameData.addEventListener('focus',function(){
    clean(nameData)
});
lastNameData.addEventListener('blur',function(){
    validation(lastNameData,3,99,false,true)
});
lastNameData.addEventListener('focus',function(){
    clean(lastNameData)
});
dniData.addEventListener('blur',function(){
    validation(dniData,7,99,true,false)
});
dniData.addEventListener('focus',function(){
    clean(dniData)
});
phoneNumberData.addEventListener('blur',function(){
    validation(phoneNumberData,9,11,true,false)
});
phoneNumberData.addEventListener('focus',function(){
    clean(phoneNumberData)
});
addressData.addEventListener('blur',function(){
    validation(addressData,4,99,true,true)
});
addressData.addEventListener('focus',function(){
    clean(addressData)
});
locationData.addEventListener('blur',function(){
    validation(locationData,3,99,true,true)
});
locationData.addEventListener('focus',function(){
    clean(locationData)
});
postalCodeData.addEventListener('blur',function(){
    validation(postalCodeData,3,6,true,false)
});
postalCodeData.addEventListener('focus',function(){
    clean(postalCodeData)
});
passwordData.addEventListener('blur',function(){
    validation(passwordData,7,99,true,true)
});
passwordData.addEventListener('focus',function(){
    clean(passwordData)});

form.addEventListener('submit', submitUser);

function submitUser(e){
    e.preventDefault()
    if(validation(nameData,3,99,false,true) && validation(lastNameData,3,99,false,true) && validation(dniData,7,99,true,false) && validation(phoneNumberData,9,11,true,false) && validation(addressData,4,99,true,true) && validation(locationData,3,99,true,true) && validation(postalCodeData,3,6,true,false) && validation(passwordData,7,99,true,true) && passwordData.value==rPasswordData.value){
        alert("Nombre " + nameData.value + ",Apellido "+lastNameData.value);
    }else{
        alert("Error")
    }
}
function validation(input,charsMin,charsMax,number,text){
    /*
    input = input
    charsMin = cantidad de caracteres min
    charsMax = cantidad de caracteres max
    number = T o F si tiene numeros
    text = T o F si tiene letras
    */
    console.log(input.value)
    var inputValue= input.value;
    var inputNumero = input.value.toString();
    console.log(inputNumero.length)
    if(inputValue == ""){
        input.style.backgroundColor="red";
        return console.log("Error, no hay dato");
    }else{
        if(inputNumero.length<charsMin || inputNumero.length>charsMax){
            input.style.backgroundColor="red";
            return console.log("caracteres de mas o de menos")
        } else if(number && text){
            input.style.backgroundColor="green";
            console.log("Paso todo");
            return true;
        }
        if(!number || text){
            for(let i = 0; i<inputNumero.length;i++){
                if(!isNaN(inputNumero.charAt(i))){
                    input.style.backgroundColor="red";
                    return console.log("Hay un numero en el input");
                }
            }
        }else if(!text || number){
            for(let i = 0; i<inputNumero.length;i++){
                if(isNaN(inputNumero.charAt(i))){
                    input.style.backgroundColor="red";
                    return console.log("Hay una letra en el input");
                }
            }
        }
    }
    input.style.backgroundColor="green";
    return true;
}
function validationAddress(input){
    var response = false;
    var inputNumero = input.value.toString();
    if(inputNumero.indexOf(" ")!=-1){
        response=true;
        for(let i = inputNumero.indexOf(" "); i<inputNumero.length;i++){
            if(isNaN(inputNumero.charAt(i))){
                input.style.backgroundColor="red";
                console.log("Hay una letra en el input");
                response=false;
                return response
            }else{
                for(let o = inputNumero.indexOf(" "); o>0;o--){
                    if(!isNaN(inputNumero.charAt(o))){
                        input.style.backgroundColor="red";
                        response=false;
                        console.log("Hay una numero en el input");
                        return response;
                }
            }
        }
        return response;
    }
}else{
    input.style.backgroundColor="red";
    console.log("Hay una numero en el input");
    return response;
}
function clean(input){
    input.style.backgroundColor="";
}
/*
console.log(validation("Tomate",2,10,true,true))
console.log(validation(1231237,2,10,true,false))*/
});