import React from 'react'
import DefaultPropsChild from './DefaultPropsChild'

const DefaultPropsParent = () => {

    let data = "Data from Parent"

  return (
    <div>DefaultPropsParent
        <DefaultPropsChild data = {data} />
        <DefaultPropsChild/>
    </div>
  )
}

export default DefaultPropsParent