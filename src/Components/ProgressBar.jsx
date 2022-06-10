import React from 'react'

const ProgressBar = ({ title, value, color }) => {
    const maxPower = 150
    const percent = (value * 100) / maxPower
    return (
        <>
            <div className='w-full  hover:bg-gray-100'>
                <div className='flex justify-between'>
                    <div className="mb-1 text-sm font-medium capitalize">{title}</div>
                    <span className='text-sm font-medium'>{value}</span>
                </div>
                <div className="w-full  rounded h-1.5">
                    <div className={"h-2 rounded " + color} style={{ width: percent + "%" }}></div>
                </div>
            </div>
        </>
    )
}

export default ProgressBar