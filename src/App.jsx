import React from 'react'
import ListPokemon from './Pages/ListPokemon'
import { Routes, Route } from "react-router-dom";
import DetailsPokemon from './Pages/DetailsPokemon';
const App = () => {
	return (
		<div className="container mx-auto max-w-7xl">
			<div className="text-center py-10">
				<h1 className="text-5xl font-bold">Poke Api</h1>
			</div >
			<Routes>
				<Route path="/" element={<ListPokemon />} />
				<Route path="pokemon/:id" element={<DetailsPokemon />} />
			</Routes>
		</div >
	)
}

export default App