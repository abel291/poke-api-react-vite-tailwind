import React, { useEffect, useState } from 'react'
import ProgressBar from '../../Components/ProgressBar'

const StatsPokemon = ({ stats, color }) => {

    return (
        <div className='grid grid-cols-2 gap-y-5 gap-x-3'>
            {Object.keys(stats).map((item, key) => (
                <ProgressBar key={key} title={item} value={stats[item]} color={color} />
            ))}
        </div>
    )
}

export default StatsPokemon