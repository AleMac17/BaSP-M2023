var randomNumber = Math.random()
if(randomNumber>=0.5){
    console.log("Greater than or equal to 0,5")
}else{
    console.log("Lower than 0,5")
}

var Age = Math.random()*100;
console.log(Age)
if(Age < 2){
    alert("Bebe")
}else if (Age > 2 && Age<12){
    alert("Niño")
}else if (Age > 13 && Age<19){
    alert("Adolescente")
}else if (Age > 20 && Age<30){
    alert("Joven")
}else if (Age > 31 && Age<60){
    alert("Adulto")
}else if (Age > 61 && Age<75){
    alert("Adulto mayor")
}else if (Age > 75){
    alert("Anciano")
}
