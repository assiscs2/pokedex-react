import { PokemonCardProps } from "../pages/Home";

export interface PokemonTypeProps {
  typeName: string;
  abilityName?: string;
  pokemon_v2_ability?: any;

}

export function Element(PokeTypeProps: PokemonTypeProps, PokeCardProps: PokemonCardProps) {

  // console.log(PokeTypeProps.abilityName, 'teste?')

  // console.log(bulba.pokemon_v2_pokemontypes.map((element:string, index:string) => {console.log(element, index, 'rola')}), 'oi')

  // {PokeCardProps.pokemon_v2_pokemonabilities_aggregate.nodes.map((PokeCardProps: PokemonCardProps) => {
   
  return (
    <span className="bg-green-400 border-2 border-gray-900 rounded-lg px-2 py-1 font-semibold flex items-center justify-center bg-opacity-80 hover:bg-opacity-100 transition-opacity text-gray-900">
       {PokeTypeProps.typeName} 
    </span>
  );
  }
//  }

