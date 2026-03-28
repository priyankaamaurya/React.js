import React from 'react'

const UseCallbackChild = () => {
     console.log("Component callback")
     console.log("Here we are using useCallback")

  return (
    <div>
        <h1> UseCallbackChild </h1>
    </div>
  )
}

export default React.memo(UseCallbackChild)