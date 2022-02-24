import { PokeData } from "./interface/pokemon";
export function isPokemon(pokemon: any): pokemon is PokeData{
    return "id" in pokemon;
}