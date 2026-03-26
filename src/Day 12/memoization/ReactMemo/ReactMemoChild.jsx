import React from 'react'

const ReactMemoChild = () => {
  return (
    <div>
        {console.log("COMPONENT IS RE-RENDER")}
        {/* <h1> ReactMemoChild </h1> */}
    </div>
  )
}

export default React.memo(ReactMemoChild)