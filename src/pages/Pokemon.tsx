import { Header } from "../components/Header";
import { PokeInfo } from "../components/PokeInfo";




export interface PokemonFullInfoProps {
  id: number;
  name: string;
  abilityName?: string;
  location: string;
  pokemon_v2_ability?: any;
  typeName: any;
  pokemon_v2_type: any;
  }

export function Pokemon() {
  return (
    <>
      <Header />
      <div className="mt-8 flex justify-center">
              <PokeInfo/>        
      </div>
    </>
  );
}
