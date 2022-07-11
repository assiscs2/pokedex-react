import { CardMock } from "../components/CardMock";
import { Header } from "../components/Header";
import { PokeCard } from "../components/PokeCard";

export function Home() {
  return (
    <>
      <Header />

      <div className="mt-8 flex justify-center">
        <ul>
          <li className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
            <PokeCard />
          </li>
        </ul>
      </div>
    </>
  );
}
