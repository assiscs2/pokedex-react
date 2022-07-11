import bulbassaur from '/src/mock-assets/bulbassaur.png'

export function PokeCard() {
  return <a href="pokemon/x">
    <div className="bg-gray-100 lg:w-96 md:w-80 sm:w-72 h-60 rounded-lg border-4 border-gray-900 flex">
        <div className='flex items-center justify-center h-auto w-52'>
        <img className='h-60 max-h-60 border-r-4 border-gray-900 overflow-hidden'
        
        src={bulbassaur} alt="Imagem de um Bullbassaur" />
        </div>

        <div className='bg-red-500 flex-1 overflow-hidden rounded-r-md text-gray-800 flex items-center flex-col h-full justify-evenly'>
        <strong className='text-gray-700 bg-gray-100 border-2 border-gray-900 rounded-lg p-1'>
            Bulbassaur
        </strong>

        <div className='grid gap-2 text-sm'>

            
        <span className='bg-green-400 border-2 border-gray-900 rounded-lg px-2 py-1 font-semibold flex items-center justify-center bg-opacity-80 hover:bg-opacity-100 transition-opacity'
        >Grass</span>
        <span className='bg-fuchsia-500 border-2 border-gray-900 rounded-lg px-2 py-1 font-semibold flex items-center justify-center bg-opacity-80 hover:bg-opacity-100 transition-opacity'
        >Poison</span>
        </div>

        </div>
    </div>
  </a>;
}
