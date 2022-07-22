import { useState } from "react";
import logo from "/src/assets/logo.png";

export function Header() {

  const [ inputText, setInputText ] = useState(); 

  let inputHandler = (e: any) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  }

  console.log(inputText)

  return (
    <div className="flex justify-center flex-col items-center border border-gray-900">
      <div className="bg-red-500 w-[100vw] flex items-center justify-center h-16">
        <img className="h-12" src={logo} alt="logo do pokémon" />
      </div>

      <div className="bg-gray-900 h-4 w-[100vw] flex items-center justify-center">
        <div className="bg-gray-900 rounded-full h-8 w-8 flex items-center justify-center z-0">
          <div className="bg-gray-100 rounded-full h-4 w-4"></div>
        </div>
      </div>

      <div className="bg-gray-100 w-[100vw] flex items-center justify-center h-16 gap-2">
        <input
          className="border-2 border-gray-800 rounded-md max-w-xl w-52 sm:w-[320px] pl-2 text-gray-800 placeholder:text-gray-700 font-sans placeholder:font-sans"
          type="text"
          placeholder="Quem é esse pokémon?"
          onChange={inputHandler}
        />
        <button className="items-center text-gray-200 text-xs bg-gray-800 hover:bg-gray-700 rounded-lg border-2 sm:text-sm p-1 border-gray-600 transition-colors">
          Pesquisar
        </button>
      </div>
    </div>
  );
}
