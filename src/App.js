import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
// import PokeFetch from './components/PokeFetch';
// import PokemonDetails from "./components/PokemonDetails";
import Footer from "./components/Footer";
import About from "./components/About";
import Loading from "./components/Loading";

const LazyFetch = React.lazy(() => import("./components/PokeFetch"));
const LazyDetails = React.lazy(() => import("./components/PokemonDetails"));


function App() {
  return (
<div>
    <Navbar />  
    <BrowserRouter>
    <Routes>   
      <Route path="/" element={
      <React.Suspense fallback={Loading}>
        <LazyFetch />
       </React.Suspense>}/>
      <Route path="/pokemon/:id" element={
      <React.Suspense fallback={Loading}>
      <LazyDetails/>
      </React.Suspense>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
    </BrowserRouter>
    <Footer />
    </div>
  );
}

export default App;
