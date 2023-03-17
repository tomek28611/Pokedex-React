import { useEffect, useState } from "react";
import Card from "./Card";

function PokeFetch() {
    const [allPokemons, setAllPokemons] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);


    const limit = 12;
    const totalPokemons = 151;
    const totalPages = Math.ceil(totalPokemons / limit);

    const getAllPokemons = async () => {
        const res = await fetch(
            `https://pokeapi.co/api/v2/pokemon?limit=${totalPokemons}&offset=0`
        );
        const data = await res.json();

        function createPokemonObject(results) {
            results.forEach(async (pokemon) => {
                const res = await fetch(
                    `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
                );
                const data = await res.json();
                setAllPokemons((currentList) => [...currentList, data]);
            });
        }
        createPokemonObject(data.results);
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

    return (
        <div className="py-8 pb-16 px-4">
            <div className="ml-20 mr-20">
                <h1 className="py-4 text-4xl font-bold mb-6">Pokemons</h1>


                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 w-[200px] md:w-[100%] mx-auto">
                    {currentPokemons.map((pokemon) => (
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
                <div className="flex justify-center my-4">
                    <button
                        onClick={handlePrevPage}
                        disabled={currentPage === 1}
                        className="bg-blue-500 text-white font-bold py-2 px-4 rounded-l"
                    >
                        Prev
                    </button>
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handlePageClick(index + 1)}
                            className={`${currentPage === index + 1
                                    ? "bg-blue-500 text-white"
                                    : "bg-gray-200 text-gray-500"
                                } font-bold py-2 px-4`}
                        >
                            {index + 1}
                        </button>
                    ))}
                    <button
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                        className="bg-blue-500 text-white font-bold py-2 px-4 rounded-r"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PokeFetch;