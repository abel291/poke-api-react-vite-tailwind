import { useState, useEffect } from "react";
import Card from "../Components/Card";
import { motion } from "framer-motion"
import dataJson from "../data.json"
import { Link } from "react-router-dom";
function ListPokemon() {
	const [pokemons, setPokemons] = useState([])
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

	const getSpecificPokemon = async (id) => {
		const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
		let json = await response.json();
		console.log(json)
		return {
			id: json.id,
			name: json.name,
			sprites: json.sprites.other.dream_world.front_default,
			type: json.types[0].type.name,
			types: json.types,
			hp: json.stats[0].base_stat,
			attack: json.stats[1].base_stat,
			defense: json.stats[2].base_stat,
			speed: json.stats[3].base_stat,

		}
	}
	const getPokemons = async (porPokemon) => {
		let limitPoke = 50
		let pokemones = []
		for (let i = 1; i <= limitPoke; i++) {
			let data = await getSpecificPokemon(i)
			pokemones.push(data)
		}
		return pokemones
	}
	useEffect(() => {
		// getPokemons()
		//   .then((data) => {
		//     setPokemons(data);
		//   })
		setPokemons(dataJson);
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
							<Link to={"pokemon/" + item.id}>
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
