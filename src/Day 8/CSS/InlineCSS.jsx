import React from 'react'

const InlineCSS = () => {

    let h1style = {
        color: "red", 
        backgroundColor: "black"
    }
  return (
    <div>
        {/* Inline CSS */}
        <h1 style={{color: "red", backgroundColor: "black"}}>InlineCSS</h1>
        <h1 style={h1style}>InlineCSS2</h1>

    </div>
  )
}

export default InlineCSS