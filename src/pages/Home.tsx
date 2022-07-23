import { Header } from "../components/Header";
import { PokeCard } from "../components/PokeCard";
import { useQuery, gql } from '@apollo/client';
import { client } from '../libs/apollo';
import { PokemonTypeProps } from "../components/Element";

export interface PokemonCardQuery {
  pokemon_v2_pokemon_aggregate: {
      nodes: {
        id: number
        name: string
        pokemon_species_id: number
        pokemon_v2_pokemontypes: {
          pokemon_v2_type: {
            name: string
          }
        }
      }
    }
  }

client
  .query({
    query: gql`
      query getPokemonCardsList {
        pokemon_v2_pokemon_aggregate(
          order_by: { id: asc }
          limit: 33
          offset: 0
        ) {
          nodes {
            id
            name
            pokemon_species_id
            pokemon_v2_pokemontypes {
              pokemon_v2_type {
                name
              }
            }
            pokemon_v2_pokemonsprites {
              sprites
            }
          }
        }
      }
    `,
  })
  .then((result) => result);

 const GET_POKEMONS_LIST = gql`
   query getPokemonCardsList {
     pokemon_v2_pokemon_aggregate(order_by: { id: asc }, limit: 33, offset: 0) {
       nodes {
         id
         name
         pokemon_species_id
         pokemon_v2_pokemontypes {
           pokemon_v2_type {
             name
           }
         }
         pokemon_v2_pokemonsprites {
           sprites
         }
       }
     }
   }
 `;

// const PokemonPosts = () => {
//   const { data } = useQuery<PokemonCardQuery>(GET_POKEMONS_LIST)
//   console.log(data, 'test')
// }



export interface PokemonCardProps {
  pokemon_v2_pokemontypes?: any;
  key: number;
  id: number;
  name: string;
  pokemon_species_id: number;
  typeName: string ;
}

  // typeName: { pokemon_v2_pokemontypes: [ pokemon_v2_type: { name: string } ]};


  // const bulba = data?.pokemon_v2_pokemon_aggregate.nodes;


  // const teste = bulba.pokemon_v2_pokemontypes.map((element:string, index:string) => { console.log(element,'aro2')})

  // console.log(teste, 'aro')

export function Home() {

  const { data } = useQuery(GET_POKEMONS_LIST);

  //  console.log(data?.pokemon_v2_pokemon_aggregate.nodes[1].pokemon_v2_pokemontypes[0].pokemon_v2_type.name, 'teste')

  return (
    <>
      <Header />
      <div className="mt-8 flex justify-center">
        <ul>
          <li className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
            {data?.pokemon_v2_pokemon_aggregate.nodes.map((PokeCardProps: PokemonCardProps, PokeTypeProps: PokemonTypeProps) => {

              const typeName = PokeCardProps.pokemon_v2_pokemontypes[0].pokemon_v2_type.name;
              
              // console.log(typeName)

              return( 
                <PokeCard 
                  key={PokeCardProps.id}
                  id={PokeCardProps.id}
                  name={PokeCardProps.name}
                  pokemon_species_id={PokeCardProps.pokemon_species_id}
                  typeName={typeName}
                  />
              )
            }
            )}
          </li>
        </ul>
      </div>
    </>
  );
}
