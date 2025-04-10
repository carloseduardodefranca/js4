var numeros1 = Number(prompt("Digite um numero inteiro"))
var numeros2 = Number(prompt("Digite um numero inteiro"))
var numeros3 = Number(prompt("Digite um numero inteiro"))

if(numeros1 > numeros2 && numeros1 > numeros3) {
    alert(`o maior dentre os 3 valores é o 1  valor ${numeros1}`)
}else if(numeros2 > numeros1 && numeros2 > numeros3) {
    alert(`o maior dentre os 3 valores é o 2  valor ${numeros2}`)
}else if(numeros3 > numeros1 && numeros3 > numeros2) {
    alert(`o maior dentre os 3 valores é o 3  valor ${numeros3}`)
}