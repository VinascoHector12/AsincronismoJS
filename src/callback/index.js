//CallBack:
//Una función de callback es una función que se pasa a otra función como un argumento, que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.

//Callback sincrono
function sum(num1, num2){
  return num1 + num2;
};

function calc(num1, num2, callback){
  return callback(num1, num2);
}

let result = calc(2, 5, sum);

console.log(result);

setTimeout(function(){
  console.log('Hello from Js');
}, 2000);

function gretting(name){
  console.log(`Hola ${name}`);
}

setTimeout(gretting, 2000, 'Hector');



