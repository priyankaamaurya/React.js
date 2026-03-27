import React, { useMemo, useState } from 'react'

const UseMemoParent = () => {

    let [count, setCount] = useState(0)
    let [displayCount, setDisplayCount] = useState(0)

    console.log(`Display Count is ${displayCount}`)

    useMemo(function (){
        console.log("Function is re-created")
        let res =0;
        for(let i=0; i<10000000; i++){
            res = count + 1
        }
        return res
    }, [count])

    // function expensiveFn(){
    //     console.log("Function is re-created")
    //     let res =0;
    //     for(let i=0; i<10000000; i++){
    //         res = count + 1
    //     }
    //     return res
    // }
    // expensiveFn()

    return (
    <div>
        <h1> UseMemoParent  count: {count} </h1>
        <button onClick={()=>setCount(count++)}> Change Count </button>
        <button onClick={()=>setDisplayCount(displayCount++)}> Change Display Count </button>

     </div>
  )
}

export default UseMemoParent