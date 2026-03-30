import React, { useCallback, useState } from 'react'
import UseCallbackChild from './useCallbackChild'

const UseCallbackParent = () => {
    let [count, setCount] = useState(0)

    // function expensiveFn(){
    //     console.log("Function is Called")
    // }

    let expensiveFn = useCallback(function(){
        console.log("Function is Called")
        console.log("Here we are using useCallback")
    },[])

  return (
    <div>
        <h1> UseCallbackParent : {count} </h1>
        <button onClick={()=> setCount(count++)}> Click </button>
        <UseCallbackChild expensiveFn={expensiveFn}/>
    </div>
  )
}

export default UseCallbackParent