//inicializar numeros
let input = document.getElementById("input")
let numeros = "";

//agregar al input
function agregarNumero(num) {
    numeros += num.toString()
    input.value = numeros
}

//borrar 
let borrar = document.getElementById("borrar").onclick = function(){numeros = "" 
input.value = numeros}

//inicializar operadores
let suma = document.getElementById("sumar").onclick = function(){
    if(numeros.includes("+") == true){
        alert("Ya hay un operador suma")
    }else {
        numeros += "+"
        input.value = numeros
    }
}
let resta = document.getElementById("restar").onclick = function(){
    if(numeros.includes("-") == true){
        alert("Ya hay un operador resta")
    }else {
        numeros += "-"
        input.value = numeros
    }
}
let multiplicar = document.getElementById("multiplicar").onclick = function(){
    if(numeros.includes("*") == true){
        alert("Ya hay un operador multiplicar")
    }else {
        numeros += "*"
        input.value = numeros
    }
}
let dividir = document.getElementById("dividir").onclick = function(){
    if(numeros.includes("÷") == true){
        alert("Ya hay un operador division")
    }else {
        numeros += "÷"
        input.value = numeros
    }
}

//operar

let operar = document.getElementById("igual").onclick = function(){
    let posiciones = []
    let valores = []
    let contador = 0;
    let guardado = ""; 
    let resultado;
    for(i in numeros){
        if(numeros.charAt(i) == "+" || numeros.charAt(i) == "-" || numeros.charAt(i) == "*" || numeros.charAt(i) == "÷"){
            posiciones.push(i)
            valores.push(parseInt(guardado))
            guardado = "";
        }else {
            contador++
            guardado += numeros.charAt(i)
        }
    }
    valores.push(parseInt(guardado))

    if(numeros.charAt(posiciones[0]) == "+"){
        resultado =  valores[0] + valores[1]
        input.value = resultado
    }else if(numeros.charAt(posiciones[0]) == "-"){
        resultado = valores[0] - valores[1]
        input.value = resultado
    }else if(numeros.charAt(posiciones[0]) == "*"){
        resultado = valores[0] * valores[1]
        input.value = resultado
    }else if(numeros.charAt(posiciones[0]) == "÷"){
        resultado = valores[0] / valores[1]
        input.value = resultado
    }
    
}

