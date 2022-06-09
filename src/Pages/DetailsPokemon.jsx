import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { fecthApi } from '../helper';

const DetailsPokemon = () => {

	const [pokemon, setPokemon] = useState(false)
	const [abilities, setAbilities] = useState([])
	const [species, setSpecies] = useState("")
	let { id } = useParams();

	const getPokemon = async (id) => {
		let json = await fecthApi(`https://pokeapi.co/api/v2/pokemon/${id}`)
		return json
	}
	const getAbilities = async (abilities) => {
		let newAbilities = []

		for (let i = 0; i < abilities.length; i++) {
			await fecthApi(abilities[i].ability.url).then((data) => {
				let desc_min = data.flavor_text_entries.find((item, key) => {
					return item.language.name == "es"
				})

				let name = data.names.find((item, key) => {
					return item.language.name == "es"
				})

				newAbilities[i] = {
					name: name.name,
					desc_max: data.effect_entries[0].effect,
					desc_min: desc_min.flavor_text
				}
			})
		}
		console.log(newAbilities)
		return newAbilities

	}

	const getSpecies = async (species) => {

		let newSpecies = ""
		await fecthApi(species.url).then((data) => {
			newSpecies = data.flavor_text_entries.find((item, key) => {
				return item.language.name == "es"
			})

			newSpecies = newSpecies.flavor_text
		})

		return newSpecies

	}
	useEffect(() => {
		getPokemon(id).then((res) => {
			setPokemon({
				id: res.id,
				name: res.name,
				sprites: res.sprites.other.dream_world.front_default,
				type: res.types[0].type.name,
				types: res.types,
				stats: res.stats,
				abilities: res.abilities
			})

			getAbilities(res.abilities).then((res) => {
				setAbilities(res)
			})
			getSpecies(res.species).then((res) => {
				setSpecies(res)
			})
		});


	}, [])

	return (
		<div>
			{pokemon
				? (
					<div className='p-5 max-w-xl mx-auto  rounded-xl relative border border-gray-200 overflow-hidden shadow-2xl'>
						<h2 className=' text-2xl font-bold capitalize'>
							{pokemon.name}
						</h2>
						<img className='inline-block w-auto h-36 mx-auto my-5' src={pokemon.sprites} />

						<div className='space-y-5'>
							<div>
								<h3 className='text-lg font-bold'>Habilidades</h3>
								{abilities.map((item) => (
									<div className='mt-2'>
										<h4 className='block font-semibold'>{item.name}</h4>
										<p >{item.desc_min}</p>
										<p>{item.desc_max}</p>
									</div>
								))}
							</div>

							<div>
								<h3 className='text-lg font-bold'>Especie</h3>
								<p >{species}</p>
							</div>
						</div>
					</div>
				)
				: "cargando..."
			}
		</div>
	)
}

export default DetailsPokemon