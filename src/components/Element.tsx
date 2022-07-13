
import { PokemonCardProps } from "./PokeCard";

export function Element(props: PokemonCardProps ) {

    return (
      <span className="bg-green-400 border-2 border-gray-900 rounded-lg px-2 py-1 font-semibold flex items-center justify-center bg-opacity-80 hover:bg-opacity-100 transition-opacity text-gray-900">
        {props.name}
      </span>
    );
}