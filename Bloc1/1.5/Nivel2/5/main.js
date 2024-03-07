

  const arrayPrimera = [ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ];

  const resultat = arrayPrimera.filter(elem => elem >= 10).map(elem => elem * 2).reduce(function (a,b){return a + b;})*2;

  console.log(resultat);

