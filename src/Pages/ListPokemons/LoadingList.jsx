import React from 'react'
import LoadingPage from '../../Components/LoadingPage'

const LoadingList = () => {
    return (
        <div className='flex flex-wrap gap-5  mx-auto justify-center'>
            {
                [1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                    <div className='px-5 pb-5 pt-56 w-72  rounded-xl relative border border-gray-100 overflow-hidden shadow-xl'>
                        <LoadingPage lines={7}/>
                    </div>
                ))
            }
        </div>

    )
}

export default LoadingList