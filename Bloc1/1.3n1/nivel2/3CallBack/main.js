
const esperarISaludar = (nom, callback) => {
   setTimeout(() => {
     callback(nom);
   }, 2000); 
 };
 
 
 const funcioSaludar = (nom) => {
   console.log(`Hola, ${nom}!`);
 };
 
 
 esperarISaludar("Mario", funcioSaludar);
 