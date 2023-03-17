import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import PokeFetch from './components/PokeFetch';
import PokemonDetails from "./components/PokemonDetails";
import Footer from "./components/Footer";
import Search from "./components/Search";

function App() {
  return (
<div>
    <Navbar />
 
    
    <BrowserRouter>
    <Routes>
      
      <Route path="/" element={<PokeFetch />}/>
      <Route path="/pokemon/:id" element={<PokemonDetails/>}/>
      <Route path="/search" element={<Search />}/>
    
    </Routes>
    </BrowserRouter>

    <Footer />
    </div>
  );
}

export default App;
