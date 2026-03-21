import React, { useState } from 'react'

const ConditionalRendering2 = () => {

    let [state, setState] = useState("Country")

    const content =()=>{
        switch(state){
            case "Home" : 
            return <h1> Home Page</h1>

            case "Cafeteria" : 
            return <h1> Cafeteria Page</h1>

            case "University" : 
            return <h1> University Page</h1>

            case "Institute" : 
            return <h1> Institute Page</h1>

            default : 
            return <h1> Default Page</h1>
        }
    }
  return (
    <div>
        {content()} <hr />

        <button onClick={()=> setState("Home")}>Home</button><hr/>
        <button onClick={()=> setState("Cafeteria")}>Cafeteria</button> <hr />
        <button onClick={()=> setState("University")}>University</button> <hr />
        <button onClick={()=> setState("Institute")}>Institute</button>
    </div>
  )
}

export default ConditionalRendering2