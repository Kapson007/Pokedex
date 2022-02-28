import { Pokemon } from "./interface/pokemon"
const pokedex = document.querySelector('#pokedex') as HTMLOListElement;

export const displayPokemon = (pokemon: Pokemon) =>{
    const html = `<li>${pokemon?.name}</li>`;
    pokedex.innerHTML = html;
}