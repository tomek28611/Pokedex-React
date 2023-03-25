import { useEffect, useState } from "react";
import Card from "./Card";


function PokeFetch() {
    const [allPokemons, setAllPokemons] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState('');

    const limit = 12;
    const totalPokemons = 151;
    const totalPages = Math.ceil(totalPokemons / limit);

    const getAllPokemons = async () => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon?limit=${totalPokemons}&offset=0`
        );
        const data = await res.json();
        createPokemonObject(data.results);
      };
    
      const createPokemonObject = async (results) => {
        const pokemonPromises = results.map(async (pokemon) => {
          const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
          return res.json();
        });
    
        const pokemonData = await Promise.all(pokemonPromises);
        setAllPokemons((currentList) => [...currentList, ...pokemonData]);
      };
    
      useEffect(() => {
        getAllPokemons();
      }, []);

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => prevPage - 1);
    };

    const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const handlePageClick = (page) => {
        setCurrentPage(page);
    };

    const startIndex = (currentPage - 1) * limit;
    const endIndex = startIndex + limit;
    const currentPokemons = allPokemons.slice(startIndex, endIndex);

    const filteredPokemons = allPokemons.filter(pokemon => {
        return search.toLowerCase() === ''
            ? true
            : pokemon.name.toLowerCase().includes(search)
    });


    return (
        <div className="py-8 pb-16 px-4">

            <div className="ml-20 mr-20">
                <h1 className="py-4 text-4xl font-bold mb-6">Pokemons</h1>

                <div class='max-w-md mx-auto'>
                    <div class="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
                        <div class="grid place-items-center h-full w-12 text-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>

                        <input
                            onChange={(e) => setSearch(e.target.value)}
                            class="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                            type="text"
                            id="search"
                            placeholder="Find Pokemon ..." />
                    </div>
                </div>

                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 w-[200px] md:w-[100%] mx-auto">
                    {filteredPokemons
                        .slice(startIndex, endIndex)
                        .map((pokemon) => (
                            <Card
                                key={pokemon.name}
                                id={pokemon.id}
                                image={
                                    pokemon.sprites.other["official-artwork"].front_default
                                }
                                name={pokemon.name}
                            />
                        ))}
                </div>
                <div className="flex justify-center mt-20">
                    <button
                        onClick={handlePrevPage}
                        disabled={currentPage === 1}
                        className="px-4 py-2 text-gray-500 transition-colors duration-150  border border-gray-500 rounded-l-lg focus:shadow-outline hover:bg-gray-300"
                    >
                        Prev
                    </button>
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handlePageClick(index + 1)}
                            className={`${currentPage === index + 1
                                ? "px-4 py-2 text-gray-500 transition-colors duration-150  border border-gray-400 focus:shadow-outline"
                                : " text-gray-500 hover:bg-gray-300"
                                } font-bold py-2 px-4`}
                        >
                            {index + 1}
                        </button>
                    ))}
                    <button
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 text-gray-500 transition-colors duration-150  border border-gray-500 rounded-r-lg focus:shadow-outline hover:bg-gray-300"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PokeFetch;

