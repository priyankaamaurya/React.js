import React, { useState } from 'react'

const ConditionalRendering1 = () => {

    let [state, setState] = useState("bghm")

    if(state === "A"){
        return (
            <div> A</div>
        )
    } else if(state === "B"){
        return (
            <div> B </div>
        )
    }else{
        return (
            <div> No keywords Matched</div>
        )
    }

}

export default ConditionalRendering1