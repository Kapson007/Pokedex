import "./scss/main.scss";
import getData  from "./ts/getData";
import { displayPokemon } from "./ts/insertPokemon";
import { Pokemon } from "./ts/interface/pokemon";


(
    async () => {
        const pokedex = await getData();
        const pokemons: Array<Pokemon> = await pokedex();
        console.log(pokemons);
        displayPokemon(pokemons);
    }
)();