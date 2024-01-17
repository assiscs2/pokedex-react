import { Link } from "react-router-dom";
import { HandleIncrementId } from "../hooks/HandleIncrementId";
import { PokemonCardProps, setLoadedAPokemon, setPokemonPageId } from "../pages/Home";
import { PokemonFullInfoProps } from "../pages/Pokemon";
import { PokemonTypeCard } from "./PokemonTypeCard";

export let pokeId = 1;

// export function setPokeId(props?: number) {
//   console.log(props, 'cheguei')
//   return pokeId;
// }

export function PokeCard(PokeCardProps: PokemonCardProps) {
  let idTypeCard = 0;

  // const removeEdgesImage = PokeCardProps.pokeImage.split("");
  // console.log(PokeCardProps.pokeImage.front_default, 'chegay')
  const pokeCardImage = PokeCardProps.pokeImage.front_default  // const pokeCardImage = removeEdgesImage[1]
  //   .slice(1)
  //   .slice(0, removeEdgesImage[1].length - 3)
  //   .replace('media', 'master'); 
  /* Talvez tenha que remover depois, edição do caminho dos arquivos para resover erro do GraphQL */

  // console.log(pokeCardImage)

  return (
    <Link to={`../pokemon/${PokeCardProps.id}`}>
      <div
        key={PokeCardProps.id}
        className="bg-gray-100 lg:w-96 md:w-80 sm:w-72 h-60 rounded-lg border-4 border-gray-900 flex lg:hover:w-[26rem] hover:h-[17rem] md:hover:w-[22rem] sm:hover:w-[20rem] md:hover:-translate-x-4 md:hover:-translate-y-3
        transition-all duration-300"
        onClick={() => {
          pokeId = PokeCardProps.id;
          // console.log(pokeId, 'pokecard')
          setLoadedAPokemon()
          setPokemonPageId(PokeCardProps.pokePageId)
        }}
      >
        <div className="flex items-center justify-center h-auto w-auto"
        >
          <img
            className="h-60 overflow-hidden"
            src={pokeCardImage}
            alt={`imagem de um ${PokeCardProps.name}`}
          />
        </div>
        <div className="bg-red-500 flex-1 rounded-r-[0.234rem] text-gray-800 flex items-center flex-col h-full justify-evenly min-w-[114px] border-l-4 border-gray-900 -ml-2">
          <strong className="text-gray-700 bg-gray-100 border-2 border-gray-900 rounded-lg p-1 mx-2 capitalize">
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
