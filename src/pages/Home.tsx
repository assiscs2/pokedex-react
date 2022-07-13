import { Header } from "../components/Header";
import { PokeCard } from "../components/PokeCard";
import { useQuery, gql } from '@apollo/client';
import { client } from '../libs/apollo';

client
  .query({
    query: gql`
      query getPokemonCardsList {
        pokemon_v2_pokemon_aggregate(
          order_by: { id: asc }
          limit: 12
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
          }
        }
      }
    `,
  }).then((result) => console.log(result));

 const GET_POKEMONS_LIST = gql`
 query getPokemonCardsList {
  pokemon_v2_pokemon_aggregate(order_by: {id: asc}, limit: 12, offset: 0) {
    nodes {
      id
      name
      pokemon_species_id
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
    }
  }
}
 `

export interface PokemonCardProps {
  key: number;
  id: number;
  name: string;
  pokemon_species_id: number;
}

// export interface PokemonV2Type {
//   pokemon_v2_type: PokemonV2NameType;
// }

// export interface PokemonV2NameType {
//   name: string;
// }

// export interface PokemonV2PokemonTypes {
//   pokemon_v2_pokemontypes: PokemonV2Type;
// }



export function Home() {

  const { data } = useQuery(GET_POKEMONS_LIST);

  return (
    <>
      <Header />

      <div className="mt-8 flex justify-center">
        <ul>
          <li className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
            {data?.pokemon_v2_pokemon_aggregate.nodes.map((props: PokemonCardProps) => {
              return(
                <PokeCard 
                  key={props.id}
                  id={props.id}
                  name={props.name}
                  pokemon_species_id={props.pokemon_species_id}                 
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
