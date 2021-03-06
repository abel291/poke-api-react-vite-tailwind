import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Badge from '../../Components/Badge';
import BadgeTop from '../../Components/BadgeTop';
import { fechPokemon } from '../../helper';
import LoadingList from '../ListPokemons/LoadingList';

import AbilitiesPokemon from './AbilitiesPokemon';
import SpeciesPokemon from './SpeciesPokemon';
import StatsPokemon from './StatsPokemon';

const DetailsPokemon = () => {
	let { id } = useParams();
	let location = useLocation();
	const [pokemon, setPokemon] = useState(location.state)
	
	useEffect(() => {

		if (!location.state) {
			fechPokemon(id).then((data) => {
				setPokemon(data)
			})
		}
	}, [])
	if (!pokemon) { return <LoadingList /> }

	return (
		<div className='max-w-xl mx-auto mb-5'>
			<div className={' mx-auto  rounded-xl relative border border-gray-200 overflow-hidden shadow-2xl ' + pokemon.type}>
				<div className='p-5'>
					<div className='flex justify-between'>
						<motion.h2
							initial={{ x: -50, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ duration: .5 }}
							className=' text-2xl font-bold capitalize text-white'>
							{pokemon.name}
						</motion.h2>
						<BadgeTop title="EXP" value={pokemon.exp} />
					</div>
					<div className='flex flex-wrap gap-2 mt-2'>
						{pokemon.types.map((item, index) => (
							<Badge className="bg-white/40 text-white" key={pokemon.name + index}>{item.type.name}</Badge>
						))}
					</div>
					<motion.img layoutId={pokemon.id}
						className='w-auto h-56 mx-auto mt-5'
						src={pokemon.sprites} />
				</div>

				<div className='space-y-8 bg-white px-5 pb-5 rounded-t-3xl -mt-16 pt-16'>
					<SectionDetails title="Habilidades">
						<AbilitiesPokemon rawAbilities={pokemon.abilities} />
					</SectionDetails>

					<SectionDetails title="Estadísticas">
						<StatsPokemon stats={pokemon.stats} color={pokemon.type} />
					</SectionDetails>

					<SectionDetails title="Caractersiticas de la Especie">
						<SpeciesPokemon rawSpecies={pokemon.species} />
					</SectionDetails>
				</div>

			</div>
		</div>
	)
}

const SectionDetails = ({ title, children }) => {
	return (
		<div>
			<h3 className='text-xl font-bold mb-2'>{title}</h3>
			{children}
		</div>
	)
}
export default DetailsPokemon