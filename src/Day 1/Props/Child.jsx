import React from 'react'

const Child = (props) => {
    console.log(props)
  return (
    <div>Child
        <h1>{props.children}</h1>
    </div>
  )
}

export default Child