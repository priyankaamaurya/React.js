import React from 'react'

const ChildProps = ({abc}) => {
    let {str,money} =abc
  return (
    <div>ChildProps
        {str}
        {money}
    </div>
  )
}

export default ChildProps