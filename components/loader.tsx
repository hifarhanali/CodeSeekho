import React from 'react'

interface LoaderProps  {
    size?: number
}

const Loader:React.FC<LoaderProps> = ({ size = 4 }) => {
    return (
        <div className={`p-${size} rounded-full border-r-2 border-t-2 animate-spin`} style={{width: "25px"}}></div>
    )
}

export default Loader