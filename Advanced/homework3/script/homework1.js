//document.getElementById("myButton").addEventListener("click",function(){
//  fetch(" https://api.openaq.org/v1/cities")
//}) 
document.getElementById("myButton").addEventListener("click", function () {
    $.ajax({
        url: "https://pokeapi.co/api/v2/pokemon",
        mode: "no-cors",
        headers: {
            "Access-Control-Allow-Origin": "*"
        },
        success: function (response) {
            const pokemons = response.results.slice(0, 10);
            console.log(pokemons);
            const pokemonsList = $("#pokemons");
            pokemonsList.text(`Pokemons List`);
            for (let pokemon of pokemons) {
                console.log(pokemon);
                pokemonsList.append(`<li>${pokemon.name}</li>`);
            }
        },
        error: function (response) {
            const pokemonsList = $("#pokemons");
            pokemonsList.text(`Failed to get Pokemons`);
        }
    });
});