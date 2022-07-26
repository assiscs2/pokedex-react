import { Header } from "../components/Header";
import { PokeCard } from "../components/PokeCard";
import { useQuery, gql } from "@apollo/client";
import { client } from "../libs/apollo";

export interface PokemonCardQuery {
  pokemon_v2_pokemon_aggregate: {
    nodes: {
      id: number;
      name: string;
      pokemon_species_id: number;
      pokemon_v2_pokemontypes: {
        pokemon_v2_type: {
          name: string;
        };
      };
    };
  };
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

export interface PokemonCardProps {
  pokemon_v2_pokemontypes?: any;
  key: number;
  id: number;
  name: string;
  pokemon_species_id: number;
  typeName?: any;
  pokemon_v2_pokemon_aggregate?: any;
  pokeInfo?: any;
  pokeImage: string;
  pokemon_v2_pokemonsprites?: any;
}

export function Home() {
  const { data, loading, error } = useQuery(GET_POKEMONS_LIST);

  if (loading) {
    return (
      <>
        {" "}
        <div className="flex flex-col items-center justify-center mt-[48vh]">
          <p>Loading...</p>
        </div>
      </>
    );
  }
  if (error) {
    return <> `Error! ${error}` </>;
  }

  return (
    <>
      <Header />
      <div className="mt-8 flex justify-center">
        <ul>
          <li className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 mx-4 mb-12">
            {data?.pokemon_v2_pokemon_aggregate.nodes.map(
              (PokeCardProps: PokemonCardProps) => {
                return (
                  <PokeCard
                    key={PokeCardProps.id}
                    id={PokeCardProps.id}
                    name={PokeCardProps.name}
                    pokemon_species_id={PokeCardProps.pokemon_species_id}
                    pokeInfo={PokeCardProps.pokemon_v2_pokemontypes}
                    pokeImage={
                      PokeCardProps.pokemon_v2_pokemonsprites[0].sprites
                    }
                  />
                );
              }
            )}
          </li>
        </ul>
      </div>
    </>
  );
}
