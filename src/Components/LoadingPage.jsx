const LoadingPage = ({ lines = 3 }) => {
    return (
        <div className='animate-pulse space-y-3 mt-2'>
            <div className='p-1.5 rounded bg-gray-200 w-1/2'></div>
            {Array(lines).fill('').map((item, key) => (
                <div key={key} className='p-1.5 rounded bg-gray-200 w-full'></div>
            ))}
        </div>
    )
}
export default LoadingPage