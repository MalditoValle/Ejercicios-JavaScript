/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


const sumar = (num1, num2) => {
    return parseInt(num1) + parseInt(num2);
}
const restar = (num1, num2) => {
    return parseInt(num1) - parseInt(num2);
}
const multiplicar = (num1, num2) => {
    return parseInt(num1) * parseInt(num2);
}
const dividir = (num1, num2) => {
    return parseInt(num1) / parseInt(num2);
}

    
alert("Que operacion deseas realizar?");
let operacion = prompt("1: Suma, 2: Resta, 3: Mulplicar, 4: Division");

if (operacion == 1) {
    let numero1 = prompt("Primer numero para sumar");
    let numero2 = prompt("Segundo numero para sumar");
    resultado = sumar(numero1, numero2);
    alert(`Tu resultado es ${resultado}`);

} else if (operacion == 2) {
    let numero1 = prompt("Primer numero para restar");
    let numero2 = prompt("Segundo numero para restar");
    resultado = restar(numero1, numero2);
    alert(`Tu resultado es ${resultado}`);

} else if (operacion == 3) {
    let numero1 = prompt("Primer numero para multiplicar");
    let numero2 = prompt("Segundo numero para multiplicar");
    resultado = multiplicar(numero1, numero2);
    alert(`Tu resultado es ${resultado}`);

} else if (operacion == 4) {
    let numero1 = prompt("Primer numero para dividir");
    let numero2 = prompt("Segundo numero para dividir");
    resultado = dividir(numero1, numero2);
    alert(`Tu resultado es ${resultado}`);
} else {
    alert("Ingreso erroneo");
}