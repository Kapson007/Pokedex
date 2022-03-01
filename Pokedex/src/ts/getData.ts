import { Pokemon } from "./interface/pokemon";
import { isPokemon } from "./isPokemon";
import { isType } from "./isType";

const getData = (): any =>{
    const promises: Array<Promise<unknown>> = [];
    let pokemons: Array<Pokemon | undefined> = [];
    const pokedex = async (): Promise<Array<Pokemon | undefined>> =>{
        try{
            for( let i = 1; i <= 150; i++){
                const urlAddress = `https://pokeapi.co/api/v2/pokemon/${i}`;
                
                promises.push(fetch(urlAddress).then(res => res.json()));
            }
            const dataAPI = await Promise.all(promises);
            pokemons = await dataAPI.map((data?:unknown) =>{
                if( data && isPokemon(data)){
                    return ({
                        id: data.id,
                        name: data.name,
                        image: data.sprites.front_default,
                        type: data.types.map((type?:unknown ) =>  {
                             if(type && isType(type)){
                                return type.type.name;
                            }else{
                                throw new Error("Cannot get access to data from API");
                            }
                        }).join(', '),
                        height: data.height,
                        weight: data.weight
                    }
                );
                }else{
                    throw new Error("Cannot get access to data from API");
                }

            });

        }catch(err: unknown){
            console.log(err);
        }
        return pokemons
    };

    return pokedex;
}

export default getData;