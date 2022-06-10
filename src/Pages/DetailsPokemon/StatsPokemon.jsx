import React, { useEffect, useState } from 'react'
import ProgressBar from '../../Components/ProgressBar'

const StatsPokemon = ({ stats, color }) => {

    return (
        <div className='grid grid-cols-2 gap-2'>
            {stats.map((item, key) => (
                <ProgressBar key={key} title={item.name} value={item.value} color={color} />
            ))}
        </div>
    )
}

export default StatsPokemon