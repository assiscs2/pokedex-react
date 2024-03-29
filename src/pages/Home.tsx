import { globalInput, Header } from "../components/Header";
import { PokeCard } from "../components/PokeCard";
import { useQuery, gql } from "@apollo/client";
import { client } from "../libs/apollo";
import { useState } from "react";

import { Loading } from "../components/Loading";
import { CaretLeft, CaretRight } from "phosphor-react";
import Footer from "../components/Footer";


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

export let queryOffset = 0;
export let pokemonPageId = 1;
export let loadedAPokemon = false;
export let searchParams = '';

export function setSearchParams(inputText: string) {
  searchParams = inputText
  return searchParams;
}


export function setLoadedAPokemon() {
  return (loadedAPokemon = true);
}

export function setPokemonPageId(PokePageId: number) {
  pokemonPageId = PokePageId;
}

function getPokemonsListQuery() {
  client
    .query({
      query: gql`
      query getPokemonCardsList {
        pokemon_v2_pokemon_aggregate(
          order_by: { id: asc }
          limit: 12
          offset: ${queryOffset}
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
    pokemon_v2_pokemon_aggregate(order_by: { id: asc }, limit: 12, offset: ${queryOffset}) {
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
  pokeImage: any;
  pokemon_v2_pokemonsprites?: any;
  pokePageId: number;
}

export function Home() {
  const queryInput = globalInput;
  const [counter, setCounter] = useState(queryOffset);
  const [pageCounter, setPageCounter] = useState(pokemonPageId);
  const { data, loading, error } = useQuery(getPokemonsListQuery());

  // const testImg = data?.pokemon_v2_pokemon_aggregate.nodes[0].pokemon_v2_pokemonsprites[0].sprites

  // console.log(testImg)


  if (loadedAPokemon) {
    function saveState() {
      // console.log(pokemonPageId, 'pokemonPageId')
      setCounter(pokemonPageId * 12);
      setPageCounter(pokemonPageId);
      loadedAPokemon = false
      // console.log(counter, 'counter', pageCounter, 'pageCounter')
    }

    saveState();
  }

  if (error) {
    return <> `Error! ${error}` </>;
  }


  return (
    <div className="p-0 m-0 overflow-x-hidden">
      <Header />
      {/* Top Navigation Bar */}
      <div className="flex items-center justify-center pt-4 gap-8 text-xs">
        <button onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'auto' }) }}>
          <button
            className="w-[97px] disabled:opacity-40"
            onClick={() => {
              if (queryOffset >= 12) {
                setCounter((queryOffset = counter - 12));
                setPageCounter(pageCounter - 1);
                pokemonPageId -= 1;
              }
              // console.log(counter, pageCounter, pokemonPageId, 'button -')
            }}
            disabled={queryOffset === 0 || loading}
          >
            <CaretLeft
              size={20}
              color="#c6c4cc"
              weight="fill"
              className="inline mb-0.5"
            />
            Previous Page
          </button>
        </button>
        <span>
          {"|                       " +
            pageCounter +
            "                       |"}
        </span>
        <button onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'auto' }) }}>
          <button
            className="w-[97px] disabled:opacity-40"
            onClick={() => {
              setCounter((queryOffset = counter + 12));
              setPageCounter(pageCounter + 1);
              pokemonPageId += 1;
              // console.log(counter, pageCounter, pokemonPageId, 'button -')
            }}
            disabled={loading}
          >
            Next Page
            <CaretRight
              size={20}
              color="#c6c4cc"
              weight="fill"
              className="inline mb-0.5"
            />
          </button>
        </button>
      </div>

      {loading ? (
        <Loading />
      ) : (

          <div className="my-3.5 flex justify-center items-center">
          <ul>
              <li className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 mx-4">
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
                      pokeImage={PokeCardProps.pokemon_v2_pokemonsprites[0].sprites}
                      pokePageId={pageCounter}
                    />
                  );
                })
                }
            </li>
          </ul>
        </div>
      )}
      {/* Bottom Navigation Bar */}
      <div className="flex items-center justify-center">
        <div className="flex items-center justify-center gap-8 text-xs">
          <button onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'auto' }) }}>
            <button
              disabled={queryOffset === 0 || loading}
              className="w-[97px] disabled:opacity-40"
              onClick={() => {
                if (queryOffset >= 12) {

                  setCounter((queryOffset = counter - 12));
                  setPageCounter(pageCounter - 1);
                  pokemonPageId -= 1;
                }
                // console.log(counter, pageCounter, pokemonPageId, 'button -')
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
          </button>
          <span>
            {"|                       " +
              pageCounter +
              "                       |"}
          </span>
          <button onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'auto' }) }}>
            <button
              disabled={loading}
              className="w-[97px] disabled:opacity-40"
              onClick={() => {
                setCounter((queryOffset = counter + 12));
                setPageCounter(pageCounter + 1);
                pokemonPageId += 1;

                // console.log(counter, pageCounter, pokemonPageId, 'button -')
              }}
            >
              Next Page
              <CaretRight
                size={20}
                color="#c6c4cc"
                weight="fill"
                className="inline mb-0.5"
              />
            </button>
          </button>
        </div>
      </div>
      <Footer />
    </div >
  );
}