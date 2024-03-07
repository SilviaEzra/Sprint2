
//////////////////////////////////////////////////////

function promise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Hola, món!');
    }, 2000);
  });
}

async function saludo() {
  const result = await promise();
  console.log(result);
  
}

saludo();
