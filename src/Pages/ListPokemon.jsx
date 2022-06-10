import { useState, useEffect } from "react";
import Card from "../Components/Card";
import { motion } from "framer-motion"
import allPokemons from "../allPokemons.json"
import { Link } from "react-router-dom";
import { fechPokemon, fecthApi, fomartData } from "../helper";

function ListPokemon() {

	const [pokemons, setPokemons] = useState([])
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
		hidden: { opacity: 0, scale: 0.95 },
		show: { opacity: 1, scale: 1 }
	}
	const getPokemons = async (porPokemon) => {
		let pokemones = []	
		
		for (let i = 1; i <= limitPokemon; i++) {
			await fechPokemon(i).then((data) => {
				pokemones[i] = data
			})
		}

		setPokemons(pokemones)
	}
	useEffect(() => {
		getPokemons()
		//setPokemons(dataJson);
	}, [])


	return (

		<div>
			{pokemons.length > 0 && (
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
			)}


		</div>

	);
}

export default ListPokemon;
