import { Pokemon } from "./interface/pokemon";
import { isPokemon } from "./isPokemon";
import { isType } from "./isType";
export const getData = (): Array< Pokemon | undefined> =>{
    // console.log("Hello wordl!");

    const promises: Array<Promise<unknown>> = [];
    let pokedex: Array<Pokemon | undefined > = [];
    for( let i = 1; i <= 150; i++){
        const urlAddress = `https://pokeapi.co/api/v2/pokemon/${i}`;
        
        promises.push(fetch(urlAddress).then(res => res.json()));
    }

    try{
        Promise.all(promises).then(results => {
            console.log(results);
            pokedex = results.map((data?: unknown) =>{
                if( data && isPokemon(data)){
                    return ({
                        id: data.id,
                        name: data.name,
                        image: data.sprites.front_default,
                        type: data.types.map((type?:unknown ) =>  {
                             if(type && isType(type)){
                                return type.type.name;
                            }else{
                                throw new Error("Cannot read property from API");
                            }
                        }).join(', ')
                    });
                }else{
                    throw new Error("Cannot read property from API")
                }
            });
        });

    }catch(err:unknown){
        console.error(err);
        
    }
    
    
    return pokedex;
    
};