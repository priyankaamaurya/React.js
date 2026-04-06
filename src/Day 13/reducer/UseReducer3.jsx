import React, { useReducer } from 'react'

let initialData = {
    darkMode :  false
}

function reducer (val, action){
    if(action.type === "ToggleTheme"){
        return{...val, darkMode : !val.darkMode}
    } else {
        return val
    }
}

const UseReducer3 = () => {

    let [state, setState] = useReducer(reducer, initialData)

    let styles = {
        backgroundColor : state.darkMode ? "black" : "white",
        color : state.darkMode ? "white" : "black",
        height : "100vh"
    }
    
  return (
    <div style={styles}>
        <h1>{state.darkMode ? "DarkMode" : "LightMode"}</h1>
        <button onClick={()=>setState({type:"ToggleTheme"})}> Change Theme</button>
    </div>
  )
}

export default UseReducer3