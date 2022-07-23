import { Header } from "../components/Header";
import { PokeInfo } from "../components/PokeInfo";




export interface PokemonFullInfoProps {
  id: number;
  name: string;
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
