import React from 'react'

const InternalCSS = () => {
  return (
    <div>
        <style> 
           { `
                .internal {
                    background-color : pink;
                    color : black;
                    border : 2px solid purple;
                }
            
            `}

        </style>
        <h1 className='internal'> InternalCSS </h1>
    </div>
  )
}

export default InternalCSS