const baseUrl = 'https://api.nationalize.io';

const input$$ = document.querySelector('input');

//Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando fetch() 
//para hacer una consulta a la api cuando se haga click en el botón, 
//pasando como parametro de la api, el valor del input.

const search = () => {
    // const input$$ = event.target.previousElementSibling;
    // const input$$ = document.querySelector('input');

    fetch(baseUrl + '?name=' + input$$.value).then(res => res.json()).then(res =>{
        console.log(res);
    })
}


const button$ = document.querySelector('button');

button$.addEventListener('click', search);
