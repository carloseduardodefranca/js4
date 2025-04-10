var nota = Number(prompt("Digite sua nota"))

if(nota >= 90){
    alert("sua nota é A")
}else if(nota >= 80 && nota <= 89){
    alert("sua nota é B")
}else if(nota >= 70 && nota <= 79){
    alert("sua nota é C")
}else if(nota >= 60 && nota <= 69){
    alert("sua nota é D")
}else{
    alert("sua nota é E")
}
