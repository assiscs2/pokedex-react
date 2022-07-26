export interface PokemonTypeProps {
  key: number;
  typeName?: string;
}

export function PokemonTypeCard(PokeTypeProps: PokemonTypeProps) {
  if (PokeTypeProps.typeName === "poison") {
    return (
      <span className="bg-fuchsia-500 border-2 border-gray-900 rounded-lg px-2 py-1 font-semibold flex items-center justify-center bg-opacity-80 hover:bg-opacity-100 transition-opacity text-gray-900">
        {PokeTypeProps.typeName}
      </span>
    );
  }

  if (PokeTypeProps.typeName === "grass") {
    return (
      <span className="bg-green-500 border-2 border-gray-900 rounded-lg px-2 py-1 font-semibold flex items-center justify-center bg-opacity-80 hover:bg-opacity-100 transition-opacity text-gray-900">
        {PokeTypeProps.typeName}
      </span>
    );
  }

  if (PokeTypeProps.typeName === "fire") {
    return (
      <span className="bg-orange-600 border-2 border-gray-900 rounded-lg px-2 py-1 font-semibold flex items-center justify-center bg-opacity-80 hover:bg-opacity-100 transition-opacity text-gray-900">
        {PokeTypeProps.typeName}
      </span>
    );
  }

  if (PokeTypeProps.typeName === "flying") {
    return (
      <span className="bg-blue-300 border-2 border-gray-900 rounded-lg px-2 py-1 font-semibold flex items-center justify-center bg-opacity-90 hover:bg-opacity-100 transition-opacity text-gray-900">
        {PokeTypeProps.typeName}
      </span>
    );
  }

  if (PokeTypeProps.typeName === "water") {
    return (
      <span className="bg-blue-500 border-2 border-gray-900 rounded-lg px-2 py-1 font-semibold flex items-center justify-center bg-opacity-80 hover:bg-opacity-100 transition-opacity text-gray-900">
        {PokeTypeProps.typeName}
      </span>
    );
  }

  if (PokeTypeProps.typeName === "bug") {
    return (
      <span className="bg-stone-500 border-2 border-gray-900 rounded-lg px-2 py-1 font-semibold flex items-center justify-center bg-opacity-80 hover:bg-opacity-100 transition-opacity text-gray-900">
        {PokeTypeProps.typeName}
      </span>
    );
  }

  if (PokeTypeProps.typeName === "normal") {
    return (
      <span className="bg-slate-500 border-2 border-gray-900 rounded-lg px-2 py-1 font-semibold flex items-center justify-center bg-opacity-80 hover:bg-opacity-100 transition-opacity text-gray-900">
        {PokeTypeProps.typeName}
      </span>
    );
  }

  if (PokeTypeProps.typeName === "ground") {
    return (
      <span className="bg-yellow-800 border-2 border-gray-900 rounded-lg px-2 py-1 font-semibold flex items-center justify-center bg-opacity-80 hover:bg-opacity-100 transition-opacity text-gray-900">
        {PokeTypeProps.typeName}
      </span>
    );
  }

  if (PokeTypeProps.typeName === "electric") {
    return (
      <span className="bg-yellow-400 border-2 border-gray-900 rounded-lg px-2 py-1 font-semibold flex items-center justify-center bg-opacity-80 hover:bg-opacity-100 transition-opacity text-gray-900">
        {PokeTypeProps.typeName}
      </span>
    );
  }

  return (
    <span className="bg-yellow-800  border-2 border-gray-900 rounded-lg px-2 py-1 font-semibold flex items-center justify-center bg-opacity-80 hover:bg-opacity-100 transition-opacity text-gray-900">
      {PokeTypeProps.typeName}
    </span>
  );
}
