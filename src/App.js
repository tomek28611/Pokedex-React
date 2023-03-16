import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import PokeFetch from './components/PokeFetch';
import PokemonDetails from "./components/PokemonDetails";

function App() {
  return (
<div>
    <Navbar />
    
    <BrowserRouter>
    <Routes>
      
      <Route path="/" element={<PokeFetch />}/>
      <Route path="/pokemon/:id" element={<PokemonDetails/>}/>
    
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
