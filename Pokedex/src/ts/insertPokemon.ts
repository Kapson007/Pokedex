import { Pokemon } from "./interface/pokemon"
const pokedex = document.querySelector('.pokedex') as HTMLOListElement;

export const displayPokemon = (pokemons: Array<Pokemon>) =>{
    const pokemonArrString = pokemons.map((pokemon: Pokemon) => {
        return (`<li class="card">
            <img class="card__image" src = ${pokemon.image}>
            <h2 class="card__title">#${pokemon.id}. ${pokemon.name}</h2>
            <p class="card__subtitle">Type: ${pokemon.type}</p>
        </li>`);
    }).join('');
    pokedex.innerHTML = pokemonArrString;
}