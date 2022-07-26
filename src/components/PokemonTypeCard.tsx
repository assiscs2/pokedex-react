import { gql, useQuery } from "@apollo/client";
import { client } from "../libs/apollo";
import { PokemonCardProps } from "../pages/Home";

export interface PokemonTypeProps {
  key: number;
  typeName?: string;

}



  // export function mapPokemonTypes(pokeTypes:any) {
  //   let pokeTypeId = 0;
  //   for (let el of pokeTypes) {
  //     pokeTypeId += 1;
  //     // console.log(el.pokemon_v2_type.name);
  //     renderPokemonType(el.pokemon_v2_type.name, pokeTypeId)
  //   }
  // }


export function PokemonTypeCard (PokeTypeProps: PokemonTypeProps) {

  // console.log('cheguei 2', PokeTypeProps.typeName)
  return (
    <span className="bg-green-400 border-2 border-gray-900 rounded-lg px-2 py-1 font-semibold flex items-center justify-center bg-opacity-80 hover:bg-opacity-100 transition-opacity text-gray-900">
      {PokeTypeProps.typeName}
    </span>
  );
}



  // console.log(PokeTypeProps.abilityName, 'teste?')

  // console.log(bulba.pokemon_v2_pokemontypes.map((element:string, index:string) => {console.log(element, index, 'rola')}), 'oi')

  // {PokeCardProps.pokemon_v2_pokemonabilities_aggregate.nodes.map((PokeCardProps: PokemonCardProps) => {
   

  // console.log(PokeTypeProps.pokemonId)

//     client
//     .query({
//       query: gql`
//         query getPokemonTypeById($idPokemon: Int){
//   pokemon_v2_pokemon_aggregate(where: {id: {_eq: ${PokeTypeProps.pokemonId}}}) {
//     nodes {
//       pokemon_v2_pokemontypes {
//         pokemon_v2_type {
//           name
//         }
//       }
//     }
//   }
// }
//    `,
//     })
//     .then((result) => (result));

//   const GET_POKEMON_TYPE_BY_ID = gql`
//     query getPokemonTypeById($idPokemon: Int){
//   pokemon_v2_pokemon_aggregate(where: {id: {_eq: ${PokeTypeProps.pokemonId}}}) {
//     nodes {
//       pokemon_v2_pokemontypes {
//         pokemon_v2_type {
//           name
//         }
//       }
//     }
//   }
// }
//   `;

//   const { data, loading, error } = useQuery(GET_POKEMON_TYPE_BY_ID);

//   if (loading) {
//     return (<> <p>Loading...</p></>);
//   }
//   if (error) {
//     return (<> `Error! ${error}` </>);
//   }

//     data?.pokemon_v2_pokemon_aggregate.nodes[0].pokemon_v2_pokemontypes.map((value:any) => {
  // console.log(data?.pokemon_v2_pokemon_aggregate.nodes[0].pokemon_v2_pokemontypes[1].pokemon_v2_type.name, 'olar')
  // console.log(data?.pokemon_v2_pokemon_aggregate.nodes[0].pokemon_v2_pokemontypes.map().pokemon_v2_type.name, `olar2`)
//       for (let el of value) {
//         console.log(el.pokemon_v2_pokemontypes.pokemon_v2_type.name, `chegay`)

    // const pokeTypes = data?.pokemon_v2_pokemon_aggregate.nodes[0].pokemon_v2_pokemontypes;

    // for (let el of pokeTypes) {
    //   console.log(el.pokemon_v2_type.name);



      // }
  
  //   })
  // }
 

