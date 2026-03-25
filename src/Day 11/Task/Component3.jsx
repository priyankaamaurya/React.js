import React, { useContext } from 'react'
import Contextt from './Context'

const Component3 = () => {

    let data = useContext(Contextt)

  return (
    <div>
        <h1> Component 3: {data} </h1>
        
    </div>
  )
}

export default Component3