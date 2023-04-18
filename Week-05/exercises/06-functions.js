console.log("-- EXERCISE 6: FUNCTIONS");
/* a. Crear una función suma que reciba dos valores numéricos y retorne el resultado.
Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.
*/
console.log("-Exercise 6.a:");
function sum(a,b){
  return a+b;
}
var result = sum(2,4);
console.log(result);
/* b. Copiar la función suma anterior y agregarle una validación para controlar si alguno de los parámetros no es un número;
de no ser un número, mostrar un alert aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.
*/
console.log("-Exercise 6.b:");
function sum(a,b){
  if(isNaN(a) || isNaN(b)){
    alert("One or Both parameters are not a number");
    return NaN;
  }else{
    return a+b;
  }
}
console.log(sum(1+"Jorge"));
/* c. Crear una función “validateInteger” que reciba un número como parámetro y devuelva verdadero si es un número entero.
*/
console.log("-Exercise 6.c:");
function validateInteger(a){
  if(a===Math.trunc(a)){
    return true;
  }else{
    return false;
  } 
}
console.log(validateInteger(3));
/* d. Copiar y renombrar la función suma del ejercicio 6b) y agregarle una llamada a la función del ejercicio 6c.
y que valide que los números sean enteros. En caso que haya decimales mostrar un alert con el error
y retornar el número convertido a entero (redondeado).
*/
console.log("-Exercise 6.d:");
function sumWithValidate(a,b){
  if(!isNaN(a) && !isNaN(b)){
    if(validateInteger(a)==false || validateInteger(b)== false){
      alert("Error, Its not a whole number")
      return Math.round(a) + Math.round(b)
    }else{return a+b}
  }else{
    alert("One or Both parameters are not a number");
    return NaN;
  }
}
console.log(sumWithValidate(3,2));
/* e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de una nueva función
probando que todo siga funcionando igual que en el apartado anterior.
*/
console.log("-Exercise 6.e:");
function validate(a){
  if(!isNaN(a)){
    if(a % 1 === 0){
      return a;
    }else{
      return Math.round(a);
    }
  }else{
    alert("One or Both parameters are not a number")
  }
}
function sumWithValidateV2(a,b){
  return validate(a)+validate(b)
}
console.log(sumWithValidateV2(2,3));