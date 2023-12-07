import Footer from "../components/Footer";
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
  window.scrollTo({
    top: 0, left: 0, behavior: 'auto'
  })
  // console.log(globalInput)

  return (

    <div className="p-0 m-0">
      <Header />
      <div className="mt-8 flex justify-center">
        <PokeInfo />
      </div>
      <div className="md:absolute md:bottom-0">
        <Footer />
      </div>
    </div>

  );
}
