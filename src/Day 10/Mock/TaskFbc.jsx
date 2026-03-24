import { useState } from 'react'

const TaskFbc = () => {

	let [count, setCount] = useState(0)
 
 return (
  	 <div> Function Based Component 
		<h1> Count : {count} </h1>
		<button onClick = {()=> setCount(count++)}> Increment </button>
		<button onClick = {()=> setCount(count--)}> Decrement </button>
		<button onClick = {()=> setCount(0)}> Reset </button>
	</div>
 )
}

export default TaskFbc 

// style={{color : "black", backgroundColor : "white"}}