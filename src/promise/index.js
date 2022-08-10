//Promesas: Tiene 3 estados
//Pendiente, cumplido y rechazado

const promise = new Promise((resolve, reject) => {
  resolve('Todo correcto');
});

const cows = 8;

const countCows = new Promise((resolve, reject) => {
  if(cows > 10){resolve('Have enough cows')}
  else{reject('Not enough cows')}
});

countCows.then((result) => { //con then se obtiene la respuesta del resolve a traves del result
  console.log(result);
}).catch((err) => { //con catch se captura la respuesta del reject 
  console.log(err);
}).finally(() => { //con finally ejecutamos una función sin importar la respuesta de la promesa, solo que haya terminado
  console.log('Finally')
});
