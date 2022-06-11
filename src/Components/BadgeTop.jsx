import React from 'react'

const BadgeTop = ({title,value}) => {
    return (
        <div className='  bg-white text-black  px-4 py-2 rounded-full inline-block '>
            <span className='text-xs font-semibold'>{title}</span>
            <span className=' ml-1'>{value}</span>
        </div>
    )
}

export default BadgeTop