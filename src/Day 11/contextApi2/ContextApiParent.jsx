import React, { createContext } from 'react'
import ContextApiChild1 from './ContextApiChild1'

export let MyContext2 = createContext()

const ContextApiParent = () => {

    let data = "Global Data"

  return (
    <div>
        <h1> ContextApiParent </h1>
        <MyContext2.Provider value={ data }> 
            <ContextApiChild1/>
        </MyContext2.Provider>
        
    </div>
  )
}

export default ContextApiParent