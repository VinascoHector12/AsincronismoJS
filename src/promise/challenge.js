import fetch from 'node-fetch' //fetch es una promesa (se hace uso de este modulo porque se esta probando en node y no en el navegador)
//fetch permite realizar peticiones HTTP asíncronas utilizando promesas y de forma que el código sea un poco más sencillo y menos verboso.
//Desde la versión 18 de Node.js se puede utilizar fetch de manera nativa.

const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi){
  return fetch(urlApi);
};

// fetchData(`${API}/products`)
//   .then(response => response.json())
//   .then(products => {
//     console.log(products);
//   })
//   .catch(err => console.log(err)); 

fetchData(`${API}/products`)
  .then(response => response.json())
  .then(products => {
    console.log(products);
    return fetchData(`${API}/products/${products[0].id}`);
  })
  .then(response => response.json())
  .then(product => {
    console.log(product.title);
    return fetchData(`${API}/categories/${product.category.id}`)
  })
  .then(response => response.json())
  .then(category => {
    console.log(category.name);
  })
  .catch(err => console.log(err));
