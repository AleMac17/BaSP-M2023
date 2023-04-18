console.log("-- EXERCISE 2: STRINGS");
/* a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).
 */
console.log("-Exercise 2.a:");
var stringToUpper = "Uncopyrightable";
stringToUpper.toUpperCase();
console.log(stringToUpper);
/* b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).
 */
console.log("-Exercise 2.b:");
var string1 = "Incomprehensibilities";
var string5char = string1.substring(0,5);
console.log(string5char);
/* c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).
*/
console.log("-Exercise 2.c:");
var string2 = "Spectrophotometer";
var string3char = string2.substring(string2.length-3,string2.length);
console.log(string3char);
/* d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable
(utilizar substring, toUpperCase, toLowerCase y el operador +).
 */
console.log("-Exercise 2.d:");
var string3 = "autobiography";
var firstLetter = string3.substring(0,1).toUpperCase();
var restLetter = string3.substring(1,string3.length).toLowerCase();
var string3Refactorized = firstLetter+restLetter;
console.log(string3Refactorized);
/* e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco.
 Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf). */
console.log("-Exercise 2.e:");
var string4 = "North Carolina";
var string4SpacePosition = string4.indexOf(" ");
console.log(string4SpacePosition);
/* f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras
en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).
 */
console.log("-Exercise 2.f:");
var string5 = "coNserVatory paLaeoNtoLogY";
var string5SpacePosition = string5.indexOf(" ");
var string5Refurbished = string5.substring(0,1).toUpperCase()+string5.substring(1,string5SpacePosition).toLowerCase()
+string5.substring(string5SpacePosition+1,string5SpacePosition+2).toUpperCase()
+string5.substring(string5SpacePosition+2,string5.length).toLowerCase();
console.log(string5Refurbished);