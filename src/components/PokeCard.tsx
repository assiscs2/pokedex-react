import { Link } from "react-router-dom";
import { HandleIncrementId } from "../hooks/HandleIncrementId";
import { PokemonCardProps, setLoadedAPokemon, setPokemonPageId } from "../pages/Home";
import { PokemonFullInfoProps } from "../pages/Pokemon";
import { PokemonTypeCard } from "./PokemonTypeCard";

export let pokeId = 1;

export function setPokeId(pokeId?: number) {
  return pokeId;
}

export function PokeCard(PokeCardProps: PokemonCardProps) {
  let idTypeCard = 0;

  const removeEdgesImage = PokeCardProps.pokeImage.split(" ");
  const pokeCardImage = removeEdgesImage[1]
    .slice(1)
    .slice(0, removeEdgesImage[1].length - 3);

  return (
    <Link to={`pokemon/${PokeCardProps.id}`}>
      <div
        className="bg-gray-100 lg:w-96 md:w-80 sm:w-72 h-60 rounded-lg border-4 border-gray-900 flex"
        onClick={() => {
          pokeId = PokeCardProps.id;
          setLoadedAPokemon()
          setPokemonPageId(PokeCardProps.pokePageId)
        }}
      >
        <div className="flex items-center justify-center h-auto w-52"
        >
          <img
            className="h-60 max-h-60 border-r-4 border-gray-900 overflow-hidden"
            src={pokeCardImage}
            alt={`imagem de um ${PokeCardProps.name}`}
          />
        </div>
        <div className="bg-red-500 flex-1 rounded-r-md text-gray-800 flex items-center flex-col h-full justify-evenly min-w-[114px]">
          <strong className="text-gray-700 bg-gray-100 border-2 border-gray-900 rounded-lg p-1 mx-2">
            {PokeCardProps.name}
          </strong>
          <div className="grid gap-2 text-sm">
            <ul>
              <li className="flex flex-col gap-2">
                {PokeCardProps.pokeInfo.map(
                  (PokeFullInfoProps: PokemonFullInfoProps) => {
                    let typeName = PokeFullInfoProps.pokemon_v2_type.name;

                    idTypeCard = HandleIncrementId(idTypeCard);

                    return (
                      <PokemonTypeCard key={idTypeCard} typeName={typeName} />
                    );
                  }
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Link>
  );
}
