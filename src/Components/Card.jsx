import React from 'react'

const Card = ({ pokemon }) => {
    return (
        <div className={"p-4 rounded " + pokemon.type}>
            <h2>{pokemon.name}s</h2>
            <div className='flex gap-4'>
                {pokemon.types.map((item) => (
                    <span className='bg-red-500 px-4 py-1 font-medium rounded-full'> {item.type.name}</span>
                ))}
            </div>
            <img src={pokemon.sprites} />
        </div>
    )
}

export default Card