import bulbassaurPage from "/src/mock-assets/bulbassaurPage.png";
import { ArrowFatLeft } from "phosphor-react";
import { client } from "../libs/apollo";
import { gql, useQuery } from "@apollo/client";
import { pokeId } from "./PokeCard";
import { PokemonTypeProps } from "./Element";
import { PokemonCardProps } from "../pages/Home";
import { increment } from "../libs/increment";




export function PokeInfo() {

  const idPokemon = pokeId;
  let idType = 0;
  let idAbility = 0;
  let idLocation = 0;


  client
    .query({
      query: gql`
        query getPokemonInformationById($idPokemon: Int) {
  pokemon_v2_pokemon_aggregate(where: {id: {_eq: ${idPokemon}}}) {
    nodes {
      id
      name
      pokemon_v2_pokemonstats {
        pokemon_v2_stat {
          name
        }
        base_stat
      }
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
      pokemon_species_id
      pokemon_v2_pokemonabilities_aggregate {
        nodes {
          pokemon_v2_ability {
            name
          }
          pokemon_v2_pokemon {
            pokemon_v2_pokemonsprites {
              sprites
            }
          }
        }
      }
    }
  }
  }
   `,
    })
    .then((result) => (result));

  const GET_POKEMON_FULL_INFORMATION_BY_ID = gql`
    query getPokemonInformationById($idPokemon: Int) {
  pokemon_v2_pokemon_aggregate(where: {id: {_eq: ${idPokemon}}}) {
    nodes {
      id
      name
      pokemon_v2_pokemonstats {
        pokemon_v2_stat {
          name
        }
        base_stat
      }
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
      pokemon_species_id
      pokemon_v2_pokemonabilities_aggregate {
        nodes {
          pokemon_v2_ability {
            name
          }
          pokemon_v2_pokemon {
            pokemon_v2_pokemonsprites {
              sprites
            }
          }
        }
      }
    }
  }
  }

  `;

  const { data, loading, error } = useQuery(GET_POKEMON_FULL_INFORMATION_BY_ID);

  if (loading) {
    return (<> <p>Loading...</p></>);
  }
  if (error) {
    return (<> `Error! ${error}` </>);
  }

  const pokeInfo = data.pokemon_v2_pokemon_aggregate.nodes[0];


  console.log(pokeInfo)
  console.log(pokeInfo.pokemon_v2_pokemonabilities_aggregate.nodes[0].pokemon_v2_ability.name,"testando");


  return (
      <>
      <a href={`/`}>
        <button className="absolute top-3 left-3 flex gap-1 text-xs items-center text-gray-200 bg-gray-800 hover:bg-gray-700 p-1 rounded-xl pr-2 border-2 border-gray-600 transition-colors">
          <ArrowFatLeft size={28} weight="fill" color="#C6C4CC" />
          Voltar
        </button>
      </a>
      <div className="p-6 h-[80vh] sm:w-[86vw] sm:grid sm:grid-flow-col sm:pl-4">
        <div className="flex sm:items-start justify-center">
          <img
            className="min-h-[185px] min-w-[185px] h-max w-max sm:mt-8"
            src={bulbassaurPage}
            alt="Imagem de um Bulbasaur"
          />
        </div>
        <div className="p-4 flex flex-col lg:max-h-24 sm:pl-8 sm:pr-8">
          <div className="flex-1 sm:max-h-32">
            <div className="flex gap-2 font-bold sm:text-2xl justify-center mb-4 items-center">
              <span>{pokeInfo.id}</span>
              <span>|</span>
              <h1>{pokeInfo.name} </h1>
            </div>
            <ul>
              <li className="flex flex-col gap-2 items-center md:flex md:flex-row md:justify-center">
                {/* {pokeInfo.pokemon_v2_pokemonabilities_aggregate.nodes.map((PokeCardProps: PokemonCardProps) => {
                       {
                        increment(idType)
                      return(
                        <Element
                        key={idType}
                        typeName={PokeCardProps.typeName}
                        />
                      );
                    }

                })} */}
              </li>
            </ul>
          </div>

          <div className="pt-8 pb-4 lg:pl-16 lg:pr-4">
            <span className="font-bold sm:text-2xl text-red-500">
              Abilities:
            </span>
            <ul className="mt-1">
                {pokeInfo.pokemon_v2_pokemonabilities_aggregate.nodes.map(
                  (PokeTypeProps: PokemonTypeProps) => {
                    idAbility = increment(idAbility)
                    return (
                      <>
                        <li
                        className="flex flex-col gap-1 sm:text-1xl"
                        key={idAbility}
                        >
                          <span >
                            {PokeTypeProps.pokemon_v2_ability.name}
                          </span>
                        </li>
                      </>
                    );

                  }
                )}

                {/* <span>{pokeInfo.pokemon_v2_pokemonabilities_aggregate.nodes[0].pokemon_v2_ability.name}</span> */}
            </ul>
          </div>

          <div className="pt-4 pb-4 lg:pl-16 lg:pr-4">
            <strong className="sm:text-2xl text-red-500">Locations:</strong>
            <ul className="mt-1">

              {pokeInfo.pokemon_v2_pokemonabilities_aggregate.nodes.map(
                  (PokeTypeProps: PokemonTypeProps) => {
                    idLocation = increment(idLocation)
                    return(
                      <>
                        <li
                        className="mt-1 flex flex-col gap-1"
                        key={idLocation}
                        >
                          <span>
                            {PokeTypeProps.pokemon_v2_ability.name}
                          </span>
                        </li>
                      </>
                      );

                  }
                )}
                <span>Cerulean-City-Area</span>
                <span>Pallet-Town-Area</span>
                <span>Lumiose-City-Area</span>

            </ul>

            <div className="mt-8">
              <strong className="sm:text-2xl text-red-500">STATS</strong>

              <div className="mt-2 flex flex-col lg:grid grid-cols-2 mr-2 gap-x-4">
                <div className="flex gap-1 mb-1">
                  <strong>HP:</strong>
                  <span>45</span>
                </div>

                <div className="flex gap-1 mb-1">
                  <strong>ATTACK:</strong>
                  <span>49</span>
                </div>

                <div className="flex gap-1 mb-1">
                  <strong>DEFENSE:</strong>
                  <span>49</span>
                </div>

                <div className="flex gap-1 mb-1">
                  <strong>SPECIAL-ATTACK:</strong>
                  <span>65</span>
                </div>

                <div className="flex gap-1 mb-1">
                  <strong>SPECIAL-DEFENSE:</strong>
                  <span>65</span>
                </div>

                <div className="flex gap-1 mb-1">
                  <strong>SPEED:</strong>
                  <span>45</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </>
  );
}
