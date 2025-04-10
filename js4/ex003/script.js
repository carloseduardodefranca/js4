var compra = Number(prompt("qual foi o valor da compra"))
var desconto = compra - 10

if(compra <= 100){
    alert("compra sem desconto " + compra)
}else if(compra > 100){
    alert(`desconto da casa ${desconto}`)
}