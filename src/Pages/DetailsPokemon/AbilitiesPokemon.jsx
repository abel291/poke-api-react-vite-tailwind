import React, { useEffect, useState } from 'react'
import LoadingPage from '../../Components/LoadingPage'
import { fecthAbilities } from '../../helper'

const AbilitiesPokemon = ({ rawAbilities = [] }) => {

    const [abilities, setAbilities] = useState([])

    useEffect(() => {
        setTimeout(() => {
            fecthAbilities(rawAbilities).then((data) => {
                setAbilities(data)
            })
        }, 1000);
    }, [])


    if (abilities.length === 0) { return <LoadingPage lines={5} /> }

    return (
        <div className='space-y-3'>
            {abilities.map((item, key) => (
                <div key={key}>
                    <h4 className='block font-semibold'>{item.name}</h4>
                    <p className=''>{item.desc_min}</p>
                    <p className=''>{item.desc_max}</p>
                </div>
            ))}
        </div>
    )
}


export default AbilitiesPokemon