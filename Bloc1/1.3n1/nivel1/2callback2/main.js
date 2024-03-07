


function calculadora(num1, num2, llamada) {
    
let suma = num1 + num2;
llamada(suma);
}
   

function mostrarSuma(mensaje){
console.log(`La suma es: ${mensaje}`)
}

calculadora(8,2,mostrarSuma);
