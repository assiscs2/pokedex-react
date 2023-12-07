import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Pokemon } from "./pages/Pokemon";
import { Search } from "./pages/Search";


export function Router() {
   return(
    <Routes>
       <Route path="/" element={<Home />}/>
       <Route path="/pokemon/:slug" element={<Pokemon />}/> 
      <Route path="/search/:slug" element={<Search />} /> 
    </Routes>
   ) 
}