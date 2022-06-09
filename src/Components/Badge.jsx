import React from 'react'

const Badge = ({ children,type }) => {
    return (
        <>
            <span className={"capitalize bg-white/30 px-5 py-1 font-bold text-white rounded-full text-sm "+type}>
                {children}
            </span>
        </>
    )
}

export default Badge