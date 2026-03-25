import React from 'react'

const DefaultPropsChild = ({data = "Default Props 1"}) => {
  return (
    <div>
        <h1> DefaultPropsChild : {data || "default props 2"} </h1>
    </div>
  )
}

export default DefaultPropsChild