export default  {
  const filterOrder = documement.getElementById("orderPokemon");
  filterOrder.addEventListener("onChange", function (){

  }) 

  sortData = namesPokemon.sort((a,b) => a.name.localeCompare(b.name) * -1);

//llamando los datos de la API
fetch('https://luzciel.github.io/SCL015-data-lovers/src/data/pokemon/pokemon.json')
 .then(response => response.json() )
 .then(data => {console.log(data)});

//fetch(`https://api.giphy.com/v1/gifs/search?api_key=PzBiUI6sCbqrLCFDOGArGWBCtfoauzYf&q=${gif}&limit=25&offset=0&rating=G&lang=en`)
    //.then(response => response.json())
    //.then(data => {
   // renderInfo(data);
  //  })

//declaro una variable de los nombres de los pokemones
//var namesPokemon = data.pokemon.name
//const sortData=(namesPokemon)

//filterOrder = namesPokemon.sort((a,b) => a.name.localeCompare(b.name));
//if (a.name>b.name){return 1}
// else if (a.name<b.name){return -1}

// sort ordena si es mayor o menor, pero  como son letras se pone 1 y -1

}
