import React from 'react'
import PropsDrillChild from './PropsDrillChild'

const PropsDrillParent = () => {

    let obj = [
        {
            id : 1,
            name : "Priyanka"
        },

        {
            id : 2,
            name : "Roshni"
        },

        {
            id : 3,
            name : "Prachi"
        },

        {
            id : 4,
            name : "Pooja"
        },

        {
            id : 5,
            name : "Himanshi"
        },

        {
            id : 6,
            name : "Anjali"
        }
    ]
  return (
    <div>
        PropsDrillParent
        <PropsDrillChild obj={obj}/> 
    </div>
  )
}

export default PropsDrillParent