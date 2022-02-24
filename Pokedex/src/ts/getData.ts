import { Pokemon } from "./interface/pokemon";
import { isPokemon } from "./isPokemon";

export const getData = (): Array< Pokemon | null> =>{
    // console.log("Hello wordl!");
    const promises: Array<Promise<unknown>> = [];
    let pokedex: Array<Pokemon | null > = [];
    for( let i = 1; i <= 150; i++){
        const urlAddress = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(urlAddress).then(res => res.json()));
    }

    Promise.all(promises).then(results => {
        pokedex = results.map((data?: unknown) => ({
            id: data.id,
            name: data.name,
            image: data.sprites.front_default,
            type: data.types.map((type?:unknown ) => type.type.name).join(', ')
        }));
    });
    
    return pokedex;
    
};