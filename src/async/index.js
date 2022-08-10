const fnAsync = () => {
  return new Promise ((resolve, reject) =>{
    true
      ? setTimeout(() => resolve('Async'), 2000)
      : reject(new Error('Error'));
  })
}

const otherFunction = async () => {
  const resp = await fnAsync();
  console.log(resp);
  console.log('Hello'); //El hello aparece despues de que llegue la respuesta
}

console.log('Before');

otherFunction();

console.log('After');