

   function suma(){
      let sumar = (...numeros) => numeros.reduce((a,b) => a+b);
      console.log(sumar(5,6,9))

   }