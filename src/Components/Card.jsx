import { motion } from "framer-motion"
import React from 'react'
import Badge from './Badge'

const Card = ({ pokemon }) => {
    return (
        <div className={"p-5 w-72 rounded-xl relative border border-gray-200 overflow-hidden shadow-2xl"}>
            <div
                className={"absolute inset-x-0 w-[120%] left-[-10%] bottom-[64%] h-full rounded-full " + pokemon.type}></div>
            <div className='relative'>
                <div className='text-right'>
                    <div className='  bg-white text-black  px-4 py-2 rounded-full inline-block '>
                        <span className='text-xs font-semibold'>HP</span>
                        <span className=' ml-1'>{pokemon.hp}</span>
                    </div>
                </div>
                <motion.img layoutId={pokemon.id} className='w-auto h-36 mx-auto my-5' src={pokemon.sprites} />
                <h2
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2 }}
                    className=' text-2xl font-bold text-center capitalize'>
                    {pokemon.name}
                </h2>
                <div className='flex justify-around mt-4'>
                    {pokemon.types.map((item, index) => (
                        <Badge className={`bg-white/30 text-white ${pokemon.type}`} key={pokemon.name + index}>{item.type.name}</Badge>
                    ))}
                </div>
                <div className='mt-10 '>
                    <div className='flex justify-between items-center '>
                        <div className='text-center'>
                            <h3 className='block font-bold'>{pokemon.attack}</h3>
                            <span className='block '>Ataque</span>
                        </div>
                        <div className='text-center'>
                            <h3 className='block font-bold'>{pokemon.defense}</h3>
                            <span className='block '>Defensa</span>
                        </div>
                        <div className='text-center'>
                            <h3 className='block font-bold'>{pokemon.speed}</h3>
                            <span className='block '>Velocidad</span>
                        </div>
                    </div>
                </div>
            </div>


        </div >
    )
}

export default Card
