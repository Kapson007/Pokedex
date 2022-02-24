import { Type } from "./interface/pokemon";
export function isType(typePokemon: any): typePokemon is Type{
    return "slot" in typePokemon && "type" in typePokemon;
}