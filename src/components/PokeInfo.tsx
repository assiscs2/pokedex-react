import { Element } from './Element'
import bulbassaurPage from '/src/mock-assets/bulbassaurPage.png'
import { ArrowFatLeft } from "phosphor-react";

export function PokeInfo () {
    return (
        <>
        <a href="http://localhost:3000/">
        <button className='absolute top-3 left-3 flex gap-1 text-xs items-center text-gray-200 bg-gray-800 hover:bg-gray-700 p-1 rounded-xl pr-2 border-2 border-gray-600 transition-colors'>
            <ArrowFatLeft size={28} weight="fill" color='#C6C4CC'/>
            Voltar
        </button>
        </a>
        <div className='p-6 h-[80vh] sm:w-[86vw] sm:grid sm:grid-flow-col'>
        <div className='flex sm:items-start justify-center'>
        <img 
        className='min-h-[185px] min-w-[185px] h-max w-max sm:mt-8'  
        src={bulbassaurPage} alt="Imagem de um Bulbassaur" />
        </div>
        <div className='p-4 flex flex-col'>
            
        <div className='flex-1 sm:max-h-32 lg:max-h-24'>
            <div className='flex gap-2 font-bold sm:text-2xl justify-center mb-4 items-center'>
                <span>#ID</span>
                <span >|</span>
                <h1>Bulbassaur</h1>
            </div>
            <ul>
                <li className='flex flex-col gap-2 items-center md:flex md:flex-row md:justify-center'>
                    <Element />
                    <Element />
                </li>
            </ul>
        </div>

        <div className='pt-8 pb-4'>
        <span className='font-bold sm:text-2xl text-red-500'>Abilities:</span>
        <ul className='mt-1'>
            <li className='flex flex-col gap-1 sm:text-1xl'>
                <span>Overgrow</span>
                <span>Chlorophyll</span>
            </li>
        </ul>
        </div>

        <div className='pt-4 pb-4'>
        <strong className='sm:text-2xl text-red-500'>Locations:</strong>
        <ul className='mt-1'>
            <li className='mt-1 flex flex-col gap-1'>
                <span>Cerulean-City-Area</span>
                <span>Pallet-Town-Area</span>
                <span>Lumiose-City-Area</span>
            </li>
        </ul>

        <div className='mt-8'>
            <strong className='sm:text-2xl text-red-500'>STATS</strong>

            <div className='mt-2 flex flex-col lg:grid grid-cols-2'>

                <div className='flex gap-1 mb-1'>
                <strong>HP:</strong>
                <span>45</span>
                </div>

                <div className='flex gap-1 mb-1'>                            
                <strong>ATTACK:</strong>
                <span>49</span>
                </div>

                <div className='flex gap-1 mb-1'>               
                <strong>DEFENSE:</strong>
                <span>49</span>
                </div>

                <div className='flex gap-1 mb-1'>
                <strong>SPECIAL-ATTACK:</strong>
                <span>65</span>
                </div>
                
                <div className='flex gap-1 mb-1'>
                <strong>SPECIAL-DEFENSE:</strong>
                <span>65</span>
                </div>

                <div className='flex gap-1 mb-1'>
                <strong>SPEED:</strong>
                <span>45</span>
                </div>

            </div>
            </div>
        </div>
        </div>
        </div>
        </>
    )
}