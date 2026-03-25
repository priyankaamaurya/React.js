import React, { useContext } from 'react'
import { MyContext2 } from './ContextApiParent'

const ContextApiChild2 = () => {

    let data = useContext(MyContext2)

  return (
    <div>ContextApiChild2 : {data} </div>
  )
}

export default ContextApiChild2