import { useState } from "react";
import logo from "/src/assets/logo.png";
import { Link } from "react-router-dom";
import { setLoadedAPokemon, setSearchParams } from "../pages/Home";



// function returnInputText (inputText:any) {
//   return inputText
// }

// export let textFieldSearch = ""

// function returnInputText(inputText:string) {
//     textFieldSearch = inputText;
//     // console.log(textFieldSearch, 'estou aqui')
//     updatePokemonQuery(textFieldSearch)
//     return textFieldSearch
//   }\

export let globalInput = "";

export function setGlobalInput(inputText?: string) {
  return inputText;
}

export function refreshPage() {
  window.location.reload();
}


export function Header() {


  const [inputText, setInputText] = useState("");

  let inputHandler = (e: any) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  }

  // console.log(inputText)

  return (

    <div className="flex justify-center flex-col items-center border border-gray-900 overflow-hidden">
      <Link to={'/'}>
        <div className="bg-red-500 w-[100vw] flex items-center justify-center h-16">
          <img className="h-12" src={logo} alt="logo do pokémon" />
        </div>
      </Link>

      <div className="bg-gray-900 h-4 w-[100vw] flex items-center justify-center">
        <div className="bg-gray-900 rounded-full h-8 w-8 flex items-center justify-center z-0">
          <div className="bg-gray-100 rounded-full h-4 w-4"></div>
        </div>
      </div>

      <div className="bg-gray-100 w-[100vw] flex items-center justify-center h-16 gap-3">
        <input
          className="border-2 border-gray-800 rounded-md max-w-xl w-52 sm:w-[320px] pl-2 placeholder:text-gray-400 text-gray-700 font-sans placeholder:font-sans placeholder:text-sm  md:placeholder:text-base"
          type="text"
          placeholder="Quem é esse pokémon?"
          onChange={inputHandler}
        />
        <Link to={`../search/${inputText}`}>
          <button
            disabled={!inputText}
            onClick={() => {
              setLoadedAPokemon()
              setSearchParams(inputText)
            }
            }
            className="items-center text-center text-gray-200 text-xs bg-gray-800 hover:bg-gray-700 rounded-lg border-2 sm:text-sm p-1 border-gray-600 transition-all hover:p-2 hover:pr-2 duration-200">
            Pesquisar
          </button>
        </Link>
      </div>
    </div>
  );
}

