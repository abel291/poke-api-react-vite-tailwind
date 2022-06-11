import React, { useEffect, useState } from 'react'
import LoadingPage from '../../Components/LoadingPage'
import { fecthApi, fecthSpecies } from '../../helper'
const SpeciesPokemon = ({ rawSpecies }) => {

    const [species, setSpecies] = useState("")    

    useEffect(() => {
        setTimeout(() => {
            fecthSpecies(rawSpecies).then((data)=>{
                setSpecies(data)
            })
        }, 1000);
    }, [])

    if (!species) { return <LoadingPage lines={2} /> }
    return (
        <p >{species}</p>
    )
}

export default SpeciesPokemon