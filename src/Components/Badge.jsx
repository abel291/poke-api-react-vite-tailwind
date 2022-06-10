import React from 'react'

const Badge = ({ children, type, className }) => {
    return (
        <>
            <span
                className={`${className} capitalize px-5 py-1 font-bold rounded-full text-sm `} >
                {children}
            </span>
        </>
    )
}

export default Badge