import React, { useState } from 'react'

const StateInFbc = () => {

    let [count, setCount] = useState(0)

    function increaseCount(){
        setCount(count++)
    }

    function decreaseCount(){
        setCount(count--)
    }

    function reset(){
        setCount(0)
    }
  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={increaseCount}>Increment</button>
        <button onClick={decreaseCount}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default StateInFbc