import { useState } from 'react';
import { Link } from 'react-router-dom';
import { increment } from '../libs/increment';
import { PokemonCardProps } from '../pages/Home';
import { PokemonFullInfoProps } from '../pages/Pokemon';
import { PokemonTypeCard, PokemonTypeProps } from './PokemonTypeCard';
import bulbassaur from '/src/mock-assets/bulbassaur.png'



export let pokeId = 1; 

export function setPokeId(pokeId?: number) {
  
  // console.log('cheguei aqui')

  return pokeId;
}




export function PokeCard(PokeCardProps: PokemonCardProps 
  // PokeTypeProps: PokemonTypeProps
  ) {

    let idTypeCard = 0;
  // const [ pokemonInfoId, setPokemonInfoId ] = useState(0);

  // console.log(PokeCardProps.typeName, 'teste10-')

  // function mapPokemonTypes(pokeTypes:any) {
  //   let pokeTypeId = 0;
  //   for (let el of pokeTypes) {
  //     pokeTypeId += 1;
  //     // console.log(el.pokemon_v2_type.name);
  //     renderPokemonType(el.pokemon_v2_type.name, pokeTypeId)
  //   }

  //   return 
  // }
  
  // console.log(PokeCardProps.pokeInfo, "aqui")
  
  return (
    <Link to={`pokemon/${PokeCardProps.id}`}>
      <div
        className="bg-gray-100 lg:w-96 md:w-80 sm:w-72 h-60 rounded-lg border-4 border-gray-900 flex"
        onClick={() => {
          pokeId = PokeCardProps.id;
        }}
      >
        <div className="flex items-center justify-center h-auto w-52">
          <img
            className="h-60 max-h-60 border-r-4 border-gray-900 overflow-hidden"
            src={bulbassaur}
            alt="Imagem de um Bullbassaur"
          />
        </div>
        <div className="bg-red-500 flex-1 overflow-hidden rounded-r-md text-gray-800 flex items-center flex-col h-full justify-evenly">
          <strong className="text-gray-700 bg-gray-100 border-2 border-gray-900 rounded-lg p-1">
            {PokeCardProps.name}
          </strong>
          <div className="grid gap-2 text-sm">
            <ul>
              <li className='flex flex-col gap-2'>
              {PokeCardProps.pokeInfo.map((PokeFullInfoProps: PokemonFullInfoProps) => {
                   let typeName = PokeFullInfoProps.pokemon_v2_type.name;
                  //  console.log(PokeCardProps.typeName, 'Cheguei teste card')
                   idTypeCard = increment(idTypeCard);

                   return (
                    <PokemonTypeCard key={idTypeCard} typeName={typeName}/>
                   );
                 })

                 }
                 {/* <PokemonTypeCard key={1} typeName={'Placeholder'}/> */}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Link>
  );
}

