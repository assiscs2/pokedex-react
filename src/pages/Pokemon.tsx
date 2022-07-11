import { Header } from "../components/Header";
import { PokeInfo } from "../components/PokeInfo";


export function Pokemon() {
  return (
    <>
      <Header />
      <div className="mt-8 flex justify-center">
        <PokeInfo />
      </div>
    </>
  );
}
