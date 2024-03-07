
const arrayElements = [1, 2, 3, 4, 5];


const [primerElement, segonElement, ...restaElements] = arrayElements;


console.log("Primer element:", primerElement);
console.log("Segon element:", segonElement);
console.log("Resta dels elements:", restaElements);

const arrayResta = [...restaElements];

console.log("Nueva array:", arrayResta)