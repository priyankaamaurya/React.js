import React from 'react'
import ChildProps from './ChildProps'

const ParentProps = (abc) => {

    let {str, money} = abc
  return (
    <div>ParentProps
        {/* <h1>{abc.str}</h1>
        <h1>{abc.money}</h1> */}
        <h1>{str}</h1>
        <h1>{money}</h1>
        <ChildProps abc={abc}  />   
    </div>
  )
}

export default ParentProps