import { useState, useEffect } from "react";
import Card from "../../Components/Card";
import { motion } from "framer-motion"

import { Link } from "react-router-dom";
import { fechPokemon, fecthApi, fomartData } from "../../helper";
import LoadingPage from "../../Components/LoadingPage";
import LoadingList from "./LoadingList";

function ListPokemons({ pokemons, setPokemons }) {

	let limitPokemon = 50
	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.07
			}
		}
	}

	const transitionChildren = {
		hidden: { opacity: 0, scale: 0.98 },
		show: { opacity: 1, scale: 1 }
	}

	const getPokemons = async () => {
		let pokemones = []

		for (let i = 1; i <= limitPokemon; i++) {
			await fechPokemon(i).then((data) => {
				pokemones[i] = data
			})
		}

		//const orderRandomPokemons =  pokemones.sort((a, b) => 0.5 - Math.random());
		setPokemons(pokemones)
	}

	useEffect(() => {

		if (pokemons.length === 0) {
			getPokemons()
		}

		//setPokemons(dataJson);
	}, [])
	//return <LoadingList />
	if (pokemons.length === 0) { return <LoadingList /> }

	return (

		<div>

			<motion.div
				variants={container}
				initial="hidden"
				animate="show"
				className="flex flex-wrap gap-5  mx-auto justify-center"
			>
				{pokemons.map((item, index) => (
					<motion.div key={index} variants={transitionChildren}>
						<Link to={"pokemon/" + item.id} state={item}>
							<Card key={item.name + index} pokemon={item} />
						</Link>
					</motion.div>
				))}
			</motion.div>



		</div>

	);
}

export default ListPokemons;
