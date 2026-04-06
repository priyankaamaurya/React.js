import React, { useReducer } from 'react'

let initialData = {
    name : "",
    email : "",
    password : "",
    address : ""
}

function reducer(val,action){
    return {...val, [action.type] : action.value}
}

const UseReducer2 = () => {

    let [state, setState] = useReducer(reducer, initialData)


  return (
    <div>
        <form>
            <input type="text" placeholder='Enter Name' onChange={(e)=> setState({value : e.target.value, type : "name"})} /> 
            <br />
            <br />
            <input type="text" placeholder='Enter Email' onChange={(e)=> setState({value : e.target.value, type : "email"})} />
            <br />
            <br />
            <input type="text" placeholder='Enter Password' onChange={(e)=> setState({value : e.target.value, type : "password"})} />
            <br />
            <br />
            <input type="text" placeholder='Enter Address' onChange={(e)=> setState({value : e.target.value, type : "address"})} />
        </form>
        <h2>
            Name : {state.name} <br />
            Email : {state.email} <br />
            Password : {state.password} <br />
            Address : {state.address}
        </h2>
    </div>
  )
}

export default UseReducer2