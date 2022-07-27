export interface PokemonTypeProps {
  key: number;
  typeName?: string;
}

export function PokemonTypeCard(PokeTypeProps: PokemonTypeProps) {
  if (PokeTypeProps.typeName === "poison") {
    return (
      <span className="bg-[#A040A0] border-2 border-gray-900 rounded-lg px-2 py-1 font-semibold flex items-center justify-center text-gray-900">
        {PokeTypeProps.typeName}
      </span>
    );
  }

  if (PokeTypeProps.typeName === "grass") {
    return (
      <span className="bg-[#78C850] border-2 border-gray-900 rounded-lg px-2 py-1 font-semibold flex items-center justify-center text-gray-900">
        {PokeTypeProps.typeName}
      </span>
    );
  }

  if (PokeTypeProps.typeName === "fire") {
    return (
      <span className="bg-[#F08030] border-2 border-gray-900 rounded-lg px-2 py-1 font-semibold flex items-center justify-center text-gray-900">
        {PokeTypeProps.typeName}
      </span>
    );
  }

  if (PokeTypeProps.typeName === "flying") {
    return (
      <span className="bg-[#A890F0] border-2 border-gray-900 rounded-lg px-2 py-1 font-semibold flex items-center justify-center text-gray-900">
        {PokeTypeProps.typeName}
      </span>
    );
  }

  if (PokeTypeProps.typeName === "water") {
    return (
      <span className="bg-[#6890F0] border-2 border-gray-900 rounded-lg px-2 py-1 font-semibold flex items-center justify-center text-gray-900">
        {PokeTypeProps.typeName}
      </span>
    );
  }

  if (PokeTypeProps.typeName === "bug") {
    return (
      <span className="bg-[#A8B820] border-2 border-gray-900 rounded-lg px-2 py-1 font-semibold flex items-center justify-center text-gray-900">
        {PokeTypeProps.typeName}
      </span>
    );
  }

  if (PokeTypeProps.typeName === "normal") {
    return (
      <span className="bg-[#A8A878] border-2 border-gray-900 rounded-lg px-2 py-1 font-semibold flex items-center justify-center text-gray-900">
        {PokeTypeProps.typeName}
      </span>
    );
  }

  if (PokeTypeProps.typeName === "ground") {
    return (
      <span className="bg-[#E0C068] border-2 border-gray-900 rounded-lg px-2 py-1 font-semibold flex items-center justify-center text-gray-900">
        {PokeTypeProps.typeName}
      </span>
    );
  }

  if (PokeTypeProps.typeName === "electric") {
    return (
      <span className="bg-[#F8D030] border-2 border-gray-900 rounded-lg px-2 py-1 font-semibold flex items-center justify-center text-gray-900">
        {PokeTypeProps.typeName}
      </span>
    );
  }

  if (PokeTypeProps.typeName === "rock") {
    return (
      <span className="bg-[#B8A038] border-2 border-gray-900 rounded-lg px-2 py-1 font-semibold flex items-center justify-center text-gray-900">
        {PokeTypeProps.typeName}
      </span>
    );
  }

  if (PokeTypeProps.typeName === "unknown") {
    return (
      <span className="bg-[#68A090] border-2 border-gray-900 rounded-lg px-2 py-1 font-semibold flex items-center justify-center text-gray-900">
        {PokeTypeProps.typeName}
      </span>
    );
  }

  if (PokeTypeProps.typeName === "steel") {
    return (
      <span className="bg-[#B8B8D0] border-2 border-gray-900 rounded-lg px-2 py-1 font-semibold flex items-center justify-center text-gray-900">
        {PokeTypeProps.typeName}
      </span>
    );
  }

  if (PokeTypeProps.typeName === "psychic") {
    return (
      <span className="bg-[#F85888] border-2 border-gray-900 rounded-lg px-2 py-1 font-semibold flex items-center justify-center text-gray-900">
        {PokeTypeProps.typeName}
      </span>
    );
  }

  if (PokeTypeProps.typeName === "ghost") {
    return (
      <span className="bg-[#705898] border-2 border-gray-900 rounded-lg px-2 py-1 font-semibold flex items-center justify-center text-gray-900">
        {PokeTypeProps.typeName}
      </span>
    );
  }

  if (PokeTypeProps.typeName === "ice") {
    return (
      <span className="bg-[#98D8D8] border-2 border-gray-900 rounded-lg px-2 py-1 font-semibold flex items-center justify-center text-gray-900">
        {PokeTypeProps.typeName}
      </span>
    );
  }

  if (PokeTypeProps.typeName === "arceus") {
    return (
      <span className="bg-[#B8A038] border-2 border-gray-900 rounded-lg px-2 py-1 font-semibold flex items-center justify-center text-gray-900">
        {PokeTypeProps.typeName}
      </span>
    );
  }

  if (PokeTypeProps.typeName === "dark") {
    return (
      <span className="bg-[#705848] border-2 border-gray-900 rounded-lg px-2 py-1 font-semibold flex items-center justify-center text-gray-900">
        {PokeTypeProps.typeName}
      </span>
    );
  }

  if (PokeTypeProps.typeName === "dragon") {
    return (
      <span className="bg-[#7038F8] border-2 border-gray-900 rounded-lg px-2 py-1 font-semibold flex items-center justify-center text-gray-900">
        {PokeTypeProps.typeName}
      </span>
    );
  }

  if (PokeTypeProps.typeName === "fairy") {
    return (
      <span className="bg-[#EE99AC] border-2 border-gray-900 rounded-lg px-2 py-1 font-semibold flex items-center justify-center text-gray-900">
        {PokeTypeProps.typeName}
      </span>
    );
  }

  if (PokeTypeProps.typeName === "fighting") {
    return (
      <span className="bg-[#C03028] border-2 border-gray-900 rounded-lg px-2 py-1 font-semibold flex items-center justify-center text-gray-900">
        {PokeTypeProps.typeName}
      </span>
    );
  }

  return (
    <span className="bg-yellow-800  border-2 border-gray-900 rounded-lg px-2 py-1 font-semibold flex items-center justify-center text-gray-900">
      {PokeTypeProps.typeName}
    </span>
  );
}
