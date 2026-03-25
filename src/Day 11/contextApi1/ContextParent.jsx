import React from 'react'
import MyContext from './Context1'
import ContextChild1 from './ContextChild1'
import ContextChild2 from './ContextChild2'

const ContextParent = () => {

    let data = "Global Data"

  return (
    <div>
        <h1> ContextParent </h1>

        <MyContext.Provider value={data}> 
            <ContextChild1/> 
        </MyContext.Provider>
    </div>
  )
}

export default ContextParent