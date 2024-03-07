let saludo = prompt("Saludame");
let promise = new Promise((resolve, reject) => {
    
  if (saludo === ("Hola")){
    setTimeout(() => resolve("Saludos desde Marte"), 2000);

  } else {
    reject("No me has saludado")
}
});

  promise
  .then((response) => {
console.log(response);
  })
  .catch((error) => {
    console.log(error);
  })


 