import fetch from 'node-fetch' 

const API = 'https://api.escuelajs.co/api/v1';

function postData(urlApi, data){
  //Se enviara la configuración en el fetch a traves de un objeto para que sepa el tipo de request que se hara
  const response = fetch(urlApi, {
    method: 'POST',
    mode: 'cors',
    credentials: 'same-origin', //Opcional
    headers: {
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify(data)
  });
  return response;
}

const data = {
  "title": "New Product Flux-Dy",
  "price": 25000,
  "description": "New model flux",
  "categoryId": 1,
  "images": ["https://placeimg.com/640/480/any"]
};

postData(`${API}/products`, data)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.log(err));