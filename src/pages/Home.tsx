import { globalInput, Header } from "../components/Header";
import { PokeCard } from "../components/PokeCard";
import { useQuery, gql } from "@apollo/client";
import { client } from "../libs/apollo";
import { useState } from "react";
import { CaretLeft, CaretRight } from "phosphor-react";
import { Loading } from "../components/Loading";

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

let queryLimit = 0;
export let testQuery = "";

// function getMorePokemons(value: number) {
// queryOffset = value + 12;

// }

function getPokemonsListQuery() {
  console.log(queryLimit, "fiz a query?");

  client
    .query({
      query: gql`
      query getPokemonCardsList {
        pokemon_v2_pokemon_aggregate(
          order_by: { id: asc }
          limit: 12
          offset: ${queryLimit}
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
    pokemon_v2_pokemon_aggregate(order_by: { id: asc }, limit: 12, offset: ${queryLimit}) {
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

  return GET_POKEMONS_LIST;
}

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

// console.log(counter, " ainda não cheguei")

// function addPokemonsToList() {
//   queryOffset = queryOffset + 12;
//   console.log(queryOffset, "cheguei")
//   getPokemonsListQuery(queryOffset)
// }

export function Home() {
  const queryInput = globalInput;
  // console.log(queryInput, "estou aqui");

  const { data, loading, error } = useQuery(getPokemonsListQuery());

  const [counter, setCounter] = useState(0);
  const [pageCounter, setPageCounter] = useState(1);

  // if (loading) {
  //   return (
  //     <>
  //       {" "}
  //       <Loading />
  //     </>
  //   );
  // }
  if (error) {
    return <> `Error! ${error}` </>;
  }

  return (
    <>
      <Header />
      <div className="flex items-center justify-center pt-4 gap-8 text-xs">
        <button
          disabled={counter === 0 || loading}
          className='disabled:opacity-40'
          onClick={() => {
            setCounter((queryLimit = counter - 12));
            setPageCounter(pageCounter - 1);
          }}
        >
          <CaretLeft
            size={20}
            color="#c6c4cc"
            weight="fill"
            className="inline mb-0.5"
          />
          Previous Page
        </button>
        <span>
          {"|                       " +
            pageCounter +
            "                       |"}
        </span>
        <button
          disabled={loading}
          className='disabled:opacity-40'
          onClick={() => {
            setCounter((queryLimit = counter + 12));
            setPageCounter(pageCounter + 1);
          }}
        >
          Next Page{" "}
          <CaretRight
            size={20}
            color="#c6c4cc"
            weight="fill"
            className="inline mb-0.5"
          />
        </button>
      </div>

      {loading ? (
        <Loading />
      ) : (
        <div className="mt-3.5 flex justify-center">
          <ul>
            <li className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 mx-4 mb-12">
              {data?.pokemon_v2_pokemon_aggregate.nodes
                .filter((card: any) => {
                  if (queryInput === "") {
                    return card;
                  } else if (card.name.includes(queryInput.toLowerCase())) {
                    return card;
                  }
                })
                .map((PokeCardProps: PokemonCardProps) => {
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
                })}
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
