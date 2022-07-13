import { Link } from 'react-router-dom';
import { Element } from './Element';
import bulbassaur from '/src/mock-assets/bulbassaur.png'

export interface PokemonCardProps {
  id: number;
  name: string;
  pokemon_species_id: number;
}

interface PokemonV2Type {
  pokemon_v2_type: PokemonV2NameType;
}

interface PokemonV2NameType {
  name: string;
}

interface  PokemonV2PokemonTypes {
  pokemon_v2_pokemontypes: PokemonV2Type;
}


export function PokeCard(props: PokemonCardProps) {



  return <Link to={`pokemon/${props.name}`}>
    <div className="bg-gray-100 lg:w-96 md:w-80 sm:w-72 h-60 rounded-lg border-4 border-gray-900 flex">
        <div className='flex items-center justify-center h-auto w-52'>
        <img className='h-60 max-h-60 border-r-4 border-gray-900 overflow-hidden'
        
        src={bulbassaur} alt="Imagem de um Bullbassaur" />
        </div>

        <div className='bg-red-500 flex-1 overflow-hidden rounded-r-md text-gray-800 flex items-center flex-col h-full justify-evenly'>
        <strong className='text-gray-700 bg-gray-100 border-2 border-gray-900 rounded-lg p-1'>
          {props.name}
        </strong>

        <div className='grid gap-2 text-sm'>
          <Element 
          key={props.id}
          id={props.id}
          name={props.name}
          pokemon_species_id={props.pokemon_species_id}                  
          />
          <Element 
          key={props.id}
          id={props.id}
          name={props.name}
          pokemon_species_id={props.pokemon_species_id}                  
          />
        </div>

        </div>
    </div>
    </Link>;
}
