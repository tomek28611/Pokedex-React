import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import PokeFetch from './components/PokeFetch';
import PokemonDetails from "./components/PokemonDetails";
import Footer from "./components/Footer";
import About from "./components/About";



function App() {
  return (
<div>
    <Navbar />
 
    
    <BrowserRouter>
    <Routes>
      
      <Route path="/" element={<PokeFetch />}/>
      <Route path="/pokemon/:id" element={<PokemonDetails/>}/>
      <Route path="/about" element={<About/>}/>
 


    
    </Routes>
    </BrowserRouter>

    <Footer />
    </div>
  );
}

export default App;
