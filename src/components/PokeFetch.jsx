import { useEffect, useState } from "react";
import Card from './Card'



function PokeFetch() {
    const [allPokemons, setAllPokemons] = useState([]);

    const getAllPokemons = async () => {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0");
        const data = await res.json();
        

        function createPokemonObject(results) {
            results.forEach(async (pokemon) => {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
                const data = await res.json();
                setAllPokemons((currentList) => [...currentList, data]);
                await allPokemons.sort((a, b) => a.id - b.id);
            });
        }
        createPokemonObject(data.results);
        // console.log(allPokemons);
    };
    


    useEffect(() => {
        getAllPokemons();
    }, [])

    

    return (
        <div className="py-8 pb-16 px-4">
            <div className="ml-20 mr-20">
            <h1 className="py-4 text-4xl font-bold mb-6">Pokemons</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 
                w-[200px] md:w-[100%] mx-auto">
            {allPokemons.map((pokemon) => (
              
                 <Card
                key={pokemon.name}
                id={pokemon.id}
                image={pokemon.sprites.other["official-artwork"].front_default}
                name={pokemon.name}
             
                />
            ))}
        
        </div>
        </div>
        </div>
      );


}

export default PokeFetch;