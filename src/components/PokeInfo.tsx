import { ArrowFatLeft } from "phosphor-react";
import { client } from "../libs/apollo";
import { gql, useQuery } from "@apollo/client";
import { pokeId } from "./PokeCard";
import { HandleIncrementId } from "../hooks/HandleIncrementId";
import { PokemonFullInfoProps } from "../pages/Pokemon";
import { PokemonTypeCard } from "./PokemonTypeCard";
import { Loading } from "./Loading";
import { Link } from "react-router-dom";

export function PokeInfo() {

  const idPokemon = pokeId;
  let idType = 0;
  let idAbility = 0;
  let idLocation = 0;

  console.log(idPokemon)

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
        }
      }
    }
  }
  pokemon_v2_locationarea_aggregate(where: {id: {_eq: ${idPokemon}}}) {
    nodes {
      name
    }
  }
  pokemon_v2_pokemonsprites(where: {id: {_eq: ${idPokemon}}}) {
    sprites
  }
}
   `,
    })
    .then((result) => result);

  const GET_POKEMON_FULL_INFORMATION_BY_ID = gql`
    query getPokemonInformationById($idPokemon: Int){
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
        }
      }
    }
  }
  pokemon_v2_locationarea_aggregate(where: {id: {_eq: ${idPokemon}}}) {
    nodes {
      name
    }
  }
  pokemon_v2_pokemonsprites(where: {id: {_eq: ${idPokemon}}}) {
    sprites
  }
}
  `;

  const { data, loading, error } = useQuery(GET_POKEMON_FULL_INFORMATION_BY_ID);

  if (loading) {
    return (
      <>
        {" "}
        <Loading />
      </>
    );
  }
  if (error) {
    return <> `Error! ${error}` </>;
  }

  const pokeInfo = data.pokemon_v2_pokemon_aggregate.nodes[0];

  const removeFullPokeLinkEdges =
    data.pokemon_v2_pokemonsprites[0].sprites;
  ;

  console.log(removeFullPokeLinkEdges)


  // const fullPokeImage = removeFullPokeLinkEdges[33]
  //   .slice(1)
  //   .slice(0, removeFullPokeLinkEdges[33].length - 3);


  const fullPokeImage = removeFullPokeLinkEdges.front_default


  // console.log(fullPokeImage)

  return (
    <>
      <div className="transition-all duration-150">
        <Link to={`/`}>
          <button
            className="absolute top-3 left-4 flex gap-1 text-xs items-center text-gray-200 bg-gray-800 hover:bg-gray-700 p-1 rounded-xl pr-2 border-2 border-gray-600 transition-all hover:p-2 hover:pr-3 hover:-translate-x-1 hover:-translate-y-1 duration-200"
          >
            <ArrowFatLeft size={28} weight="fill" color="#C6C4CC" />
            Voltar
          </button>
        </Link>
        <div className="p-6 sm:w-[86vw] sm:grid sm:grid-flow-col sm:pl-4">
          <div className="flex items-center justify-center">
            <img
              className=" flex items-center justify-center h-64 w-64 sm:h-80 sm:w-80 md:h-72 md:w-72 lg:h-[500px] lg:w-[500px]"
              src={fullPokeImage}
              alt={`Imagem de um ${pokeInfo.name}`}
            />
          </div>
          <div className="p-4 flex flex-col lg:max-h-24 sm:pl-8 sm:pr-8">
            <div className="flex-1 sm:max-h-32">
              <div className="flex gap-2 font-bold sm:text-2xl justify-center mb-4 items-center">
                <span>{pokeInfo.id}</span>
                <span>|</span>
                <h1 className="capitalize">{pokeInfo.name} </h1>
              </div>
              <ul>
                <li className="flex flex-col gap-2 items-center md:flex md:flex-row md:justify-center">
                  {pokeInfo.pokemon_v2_pokemontypes.map(
                    (PokeFullInfoProps: PokemonFullInfoProps) => {
                      let typeName = PokeFullInfoProps.pokemon_v2_type.name;
                      idType = HandleIncrementId(idType);

                      return <PokemonTypeCard key={1} typeName={typeName} />

                    }
                  )}
                </li>
              </ul>
            </div>

            <div className="pt-8 pb-4 lg:pl-16 lg:pr-4">
              <span className="font-bold sm:text-2xl text-red-500">
                Abilities:
              </span>
              <ul className="mt-1">
                {pokeInfo.pokemon_v2_pokemonabilities_aggregate.nodes.map(
                  (PokeFullInfoProps: PokemonFullInfoProps) => {
                    idAbility = HandleIncrementId(idAbility);
                    return (
                      <>
                        <li
                          className="flex flex-col gap-1 sm:text-1xl"
                          key={idAbility}
                        >
                          <span className="capitalize">{PokeFullInfoProps.pokemon_v2_ability.name}</span>
                        </li>
                      </>
                    );
                  }
                )}
              </ul>
            </div>

            <div className="pt-4 pb-4 lg:pl-16 lg:pr-4">
              <strong className="sm:text-2xl text-red-500">Locations:</strong>
              <ul className="mt-1">
                <li className="mt-1 flex flex-col gap-1" key={idLocation}>
                  {data.pokemon_v2_locationarea_aggregate.nodes.map(
                    (PokeFullInfoProps: PokemonFullInfoProps) => {
                      let filteredLocation = PokeFullInfoProps.name.replace(
                        /-/g,
                        " "
                      );
                      idLocation = HandleIncrementId(idLocation);
                      return (
                        <>
                          <span className="capitalize">{filteredLocation}</span>
                        </>
                      );
                    }
                  )}
                </li>
              </ul>

              <div className="mt-8">
                <strong className="sm:text-2xl text-red-500">Stats:</strong>

                <div className="mt-2 flex flex-col lg:grid grid-cols-2 mr-2 gap-x-4">
                  <div className="flex gap-1 mb-1">
                    <strong>HP:</strong>
                    <span>{pokeInfo.pokemon_v2_pokemonstats[0].base_stat}</span>
                  </div>

                  <div className="flex gap-1 mb-1">
                    <strong>ATTACK:</strong>
                    <span>{pokeInfo.pokemon_v2_pokemonstats[1].base_stat}</span>
                  </div>

                  <div className="flex gap-1 mb-1">
                    <strong>DEFENSE:</strong>
                    <span>{pokeInfo.pokemon_v2_pokemonstats[2].base_stat}</span>
                  </div>

                  <div className="flex gap-1 mb-1">
                    <strong>SPECIAL-ATTACK:</strong>
                    <span>{pokeInfo.pokemon_v2_pokemonstats[3].base_stat}</span>
                  </div>

                  <div className="flex gap-1 mb-1">
                    <strong>SPECIAL-DEFENSE:</strong>
                    <span>{pokeInfo.pokemon_v2_pokemonstats[4].base_stat}</span>
                  </div>

                  <div className="flex gap-1 mb-1">
                    <strong>SPEED:</strong>
                    <span>{pokeInfo.pokemon_v2_pokemonstats[5].base_stat}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
