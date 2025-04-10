var maça = Number(prompt("quantas maças você vai levar?"))

var preço =  maça * 1.30
var preço2 = maça * 1

if(maça <12){
    alert("sua compra deu " + preço.toFixed(1))
}else if(maça >= 12){
    alert("sua compra deu " + preço2)
}