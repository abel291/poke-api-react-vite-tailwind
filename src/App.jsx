import React, { useState } from 'react'
import ListPokemons from './Pages/ListPokemons/ListPokemons'
import { Routes, Route } from "react-router-dom";
import DetailsPokemon from './Pages/DetailsPokemon/DetailsPokemon';

const App = () => {
	const [pokemons, setPokemons] = useState([])
	return (
		<div className="container mx-auto max-w-7xl">
			<div className="text-center py-10">
				<h1 className="text-5xl font-bold">Poke Api</h1>
			</div >
			<Routes>
				<Route
					path="/"
					element={
						<ListPokemons pokemons={pokemons} setPokemons={setPokemons} />
					}

				/>
				<Route path="pokemon/:id" element={<DetailsPokemon />} />
			</Routes>
		</div >
	)
}

export default App