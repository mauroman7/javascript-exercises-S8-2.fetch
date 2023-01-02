fetch("https://api.agify.io?name=michael")

//Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para hacer un .fetch() y recibir los datos que devuelve. 
//Imprimelo mediante un console.log(). Para ello, es necesario que crees un .html y un .js.

  .then((res) => res.json())
  .then((resData) => {
    console.log(resData);
  })
  .catch((resError) => {
    console.log(resError);
  });