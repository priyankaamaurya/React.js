import React, { useEffect, useLayoutEffect, useState } from 'react'

const Layout = () => {

    let[text, setText] = useState("Js")

    // useEffect(()=> {
    //     setText("React JS")
    // }, [])

    useLayoutEffect(()=>{
        setText("React JS")
    }, [])

  return (
    <div>
        <h1> {text} </h1>
    </div>
  )
}

export default Layout