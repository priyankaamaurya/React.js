import React, { useState } from 'react'
import Contextt from './Context'
import Component2 from './Component2'

const Component1 = () => {
    
    let [state, setState] = useState(" ")

    let data = ()=> {
        setState(prompt("Enter your details"))
    }
    
  return (
    <div>
        {/* <h1> Component 1 </h1> */}
        <button onClick={data}> CLICK </button>

        <Contextt.Provider value={state}> 
            <Component2/>
        </Contextt.Provider>
    </div>
  )
}

export default Component1