import { Link } from 'react-router-dom'
import erroPikachu from './../assets/pikachu-error.png'
import { setLoadedAPokemon } from '../pages/Home'

export default function PokemonNotFound() {

  setLoadedAPokemon()
  return (
    <div>
      <Link to={'/'}>
        <div className='flex flex-col items-center justify-center text-center gap-4 h-[50vh]'>

          <img className='h-56 md:h-72 sm:translate-x-0 mx-auto' src={erroPikachu} alt="Imagem de um pikachu chorando" />

          <div className='flex flex-col gap-1 leading-tight'>
            <p className='font-bold'>Poxa, parece que seu pokémon escapou!</p>
            <p className='text-sm mt-1'>Não foi possível encontrar o pokémon que você está procurando.</p>
            <span className='text-sm'>Clique aqui para buscar novamente.</span>
          </div>

        </div>
      </Link>
    </div>
  )
}