

function numPositivo() {

   let numP = parseInt(document.getElementById('numP').value);

   console.log(numP === 0 ? false : numP > 0 ? "Es positivo" : "Es negativo");
 }
 
 





function numAlto(){
 
   let num1 = parseInt(document.getElementById('num1').value);
   let num2 = parseInt(document.getElementById('num2').value);
   let num3 = parseInt(document.getElementById('num3').value);


   console.log (num1 > num2 && num3 ? `${num1} es mayor` : 
                num2 > num1 && num3 ? `${num2} es mayor` : 
                num3 > num1 && num2 ? `${num3} es mayor` : `${num3} es menor`);


}

