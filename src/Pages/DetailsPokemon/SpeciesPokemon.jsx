import React, { useEffect, useState } from 'react'
import LodingPage from '../../Components/LodingPage'
import { fecthApi, fecthSpecies } from '../../helper'
const SpeciesPokemon = ({ rawSpecies }) => {

    const [species, setSpecies] = useState("")    

    useEffect(() => {
        setTimeout(() => {
            fecthSpecies(rawSpecies).then((data)=>{
                console.log(data)
                setSpecies(data)
            })
        }, 1000);
    }, [])

    if (!species) { return <LodingPage lines={2} /> }
    return (
        <p >{species}</p>
    )
}

export default SpeciesPokemon