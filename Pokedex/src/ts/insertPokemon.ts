import { Pokemon } from "./interface/pokemon"
const pokedex = document.querySelector('#pokedex') as HTMLOListElement;

export const displayPokemon = (pokemons: Array<Pokemon>) =>{
    const pokemonArrString = pokemons.map((pokemon: Pokemon) => {
        return (`<li>
            <img src = ${pokemon.image}>
            <h2>#${pokemon.id}. ${pokemon.name}</h2>
            <p>Type: ${pokemon.type}</p>
        </li>`);
    }).join('');
    pokedex.innerHTML = pokemonArrString;
}