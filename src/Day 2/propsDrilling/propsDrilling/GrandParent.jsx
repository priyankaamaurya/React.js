import React from 'react'
import ParentProps from './ParentProps';

const GrandParent = () => {

    let str = "Money from GP";
    let money = 54765

  return (
    <div>
        <h1>GrandParent</h1>
        <ParentProps str={str} money={money}/></div>
  )
}

export default GrandParent