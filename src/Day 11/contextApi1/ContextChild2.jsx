import React, { useContext } from 'react'
import MyContext from './Context1'

const ContextChild2 = () => {

    let data = useContext(MyContext)
    
  return (
    <div>ContextChild2 : {data} </div>
  )
}

export default ContextChild2