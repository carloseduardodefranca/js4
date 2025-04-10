var idade = Number(prompt("Informe sua idade"))

if(idade < 12){
    alert("Infantil")
}else if(idade >= 12 && idade <=17){
    alert(" adolecente")
}else if(idade >= 18 && idade <=64){
    alert("Adulto")
}else{
    alert("Sênior")
}