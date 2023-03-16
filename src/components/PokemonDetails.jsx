import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PokemonDetails() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await res.json();
      setPokemon(data);
    };

    fetchPokemon();
  }, [id]);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <div className="">
      

      <div className="">

        <div className="p-4 ml-20 mt-20 flex flex-col items-center bg-white border border-gray-200 rounded-lg 
        shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800
         dark:hover:bg-gray-700">
          <div className="border border-red-200">
          <p className="text-center text-xl font-semibold text-red-600">{pokemon.name}</p>
          <img className=" rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={pokemon.sprites.front_default} 
          alt={pokemon.name}
          />
          </div> 
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"></h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Height: {pokemon.height}</p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Weight: {pokemon.weight}</p>
            </div>
        </div>

      </div>
    </div>
  );
}

export default PokemonDetails;