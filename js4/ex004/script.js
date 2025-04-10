var temp = Number(prompt("quantos graus está hoje?"))

if(temp < 0){
    alert("tá frio pra krl")
}else if(temp >= 0 && temp <= 20){
    alert("clima perfeito para jogar helldivers")
}else if(temp >= 21 && temp <=30){
    alert(" agradável (para alguns)")
}else if(temp > 30){
    alert("calor DMS")
}