import { useState, useEffect } from "react";
import Card from "./Components/Card";
import logo from "./logo.svg";

function App() {
  const [pokemons, setPokemons] = useState([])

  const getSpecificPokemon = async (id) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    let json = await response.json();
    console.log(json)
    return {
      id: json.id,
      name: json.name,
      sprites: json.sprites.other.dream_world.front_default,
      type: json.types[0].type.name,
      types: json.types
    }
  }
  const getPokemons = async (porPokemon) => {

    let limitPoke = 5

    let pokemones = []
    for (let i = 1; i <= limitPoke; i++) {
      let data = await getSpecificPokemon(i)

      pokemones.push(data)
    }
    return pokemones
  }

  useEffect(() => {

    getPokemons()
      .then((data) => {
        setPokemons(data);
      })
    //


    // let minimimosDatos = pokemones.map(pokemon => {
    //   return {
    //     id: pokemon.id,
    //     name: pokemon.name,
    //     //sprites: pokemon.sprites.other.dream_world.front_default,
    //     types: pokemon.types
    //   }
    // })


  }, [])


  return (
    <div className="container mx-auto">
      <div className="text-center py-10">
        <h1 className="text-5xl font-bold">Poke Api</h1>
      </div >
      <div className="grid grid-cols-4 gap-4 max-w-3xl mx-auto">
        {pokemons.map((item) => (
          <Card pokemon={item} />
        ))}
      </div>

    </div>
  );
}

export default App;
