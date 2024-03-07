
let promise = new Promise(resolve => {
    setTimeout(() => resolve("Hola, món!"), 2000);
  });
  
  promise.then(alert);
   