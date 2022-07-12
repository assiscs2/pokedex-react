import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Pokemon } from "./pages/Pokemon";


export function Router() {
   return(
    <Routes>
       <Route path="/" element={<Home />}/>
       <Route path="/:slug" element={<Pokemon />}/> 
    </Routes>
   ) 
}