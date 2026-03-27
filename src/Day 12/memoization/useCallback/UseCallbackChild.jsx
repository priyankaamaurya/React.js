import React from 'react'

const UseCallbackChild = () => {
     console.log("Component callback")

  return (
    <div>
        <h1> UseCallbackChild </h1>
    </div>
  )
}

export default React.memo(UseCallbackChild)