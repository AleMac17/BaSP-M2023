var stringUpper = "Uncopyrightable";
stringUpper.toUpperCase();

var stringSub1 = "Incomprehensibilities";
var stringSub5char = stringSub1.substring(0,5);
console.log(stringSub5char);

var stringSub2 = "Spectrophotometer";
var stringSub3char = stringSub2.substring(stringSub2.length-3,stringSub2.length);
console.log(stringSub3char);

var stringSub3 = "autobiography"
var firstLetter = stringSub3.substring(0,1).toUpperCase();
var restLetter = stringSub3.substring(1,stringSub3.length).toLowerCase();
var stringSub3Refactorized = firstLetter+restLetter;
console.log(stringSub3Refactorized);

var stringSub4 = "North Carolina";
var stringSub4SpacePosition = stringSub4.indexOf(" ");
console.log(stringSub4SpacePosition);

var stringSub5 = "coNserVatory paLaeoNtoLogY"
var stringSub5SpacePosition = stringSub5.indexOf(" ");
var stringSub5Refurbished = stringSub5.substring(0,1).toUpperCase()+stringSub5.substring(1,stringSub5SpacePosition).toLowerCase()+stringSub5.substring(stringSub5SpacePosition+1,stringSub5SpacePosition+2).toUpperCase()+stringSub5.substring(stringSub5SpacePosition+2,stringSub5.length).toLowerCase();
console.log(stringSub5Refurbished)