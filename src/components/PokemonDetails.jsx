import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProgressBar from "@ramonak/react-progress-bar";

function PokemonDetails() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [selectedButton, setSelectedButton] = useState("profil");

  useEffect(() => {
    const fetchPokemon = async () => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await res.json();
      setPokemon(data);
    };

    fetchPokemon();
  }, [id]);


  if (!pokemon) {
    return <div className="grid h-screen place-items-center text-4xl font-bold text-gray-500">Loading...</div>;
  }

  const handleProfilButtonClick = () => {
    setSelectedButton("profil");
  };

  const handleStatisticsButtonClick = () => {
    setSelectedButton("statistics");
  };

  return (
    <div className="">
      <img src={`https://projectpokemon.org/images/normal-sprite/${pokemon.name}.gif`} alt="" className="absolute  -mt-16 ml-40" />
      <div className="grid h-screen place-items-center">
        <div className="h-[600px]  min-w-[900px] p-4 flex flex-col items-center bg-white border border-gray-200 rounded-lg 
        shadow md:flex-row md:max-w-xl  dark:border-gray-700 dark:bg-gray-800
         dark:hover:bg-gray-700">
          <div>
            <div className="relative grid space-x-14">
              <button
                className={`absolute -top-40 left-[400px] bg-white text-red-500 p-10 mr-7 rounded-xl text-2xl font-semibold transition duration-200 z-10 ${selectedButton === "profil" ? "bg-white/50" : ""
                  }`}
                onClick={handleProfilButtonClick}
              >
                Profil
              </button>
              <button
                className={`absolute -top-40 left-[500px]  bg-white text-red-500 p-10 rounded-xl text-2xl font-semibold transition duration-200 z-10 ${selectedButton === "statistics" ? "bg-white/50" : ""
                  }`}
                onClick={handleStatisticsButtonClick}
              >
                Statistics
              </button>
            </div>
            <div className="border border-red-200 p-12 space-y-8">
              <p className="text-center text-4xl font-bold text-red-500">
                {pokemon.name}
              </p>
              <img
                className="rounded-t-lg h-[300px] w-[300px] "
                src={pokemon.sprites.other["official-artwork"].front_default}
                alt={pokemon.name}
              />
            </div>
          </div>
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"></h5>
            {selectedButton === "profil" && (
              <div className="flex mb-3 font-bold text-2xl text-gray-700 dark:text-gray-400">
                <div className="space-y-12">
                  <div className="flex">
                    <div className="bg-red-200 mr-12">
                      Type
                    </div>
                    <div >
                      {pokemon.types[0].type.name}
                    </div>
                  </div>

                  <div className="flex">
                    <div className="bg-red-200 mr-12">
                      Weight
                    </div>
                    <div >
                      {pokemon.weight}
                    </div>
                  </div>

                  <div className="flex">
                    <div className="bg-red-200 mr-12">
                      Height
                    </div>
                    <div >
                      {pokemon.height}
                    </div>
                  </div>

                  <div className="flex">
                    <div className="bg-red-200 mr-12">
                      Abilieties
                    </div>
                    <div >
                      {pokemon.abilities[0].ability.name}
                    </div>
                  </div>

                </div>

              </div>
            )}
            {selectedButton === "statistics" && (
              <div className="mb-3 ml-6 font-bold text-2xl text-gray-700 dark:text-gray-400">
                {pokemon.stats.map((stat) => (
                  <div key={stat.stat.name} className="mb-2">
                    <span className="">{stat.stat.name} </span>
                    <ProgressBar
                      completed={stat.base_stat}
                      bgColor="#ec2a1a"
                      height="30px"
                      width="200%"
                      baseBgColor="#f4c9c9"
                      labelColor="#f2eeee"
                      labelSize="20px"
                      animateOnRender
                      maxCompleted={100}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonDetails;