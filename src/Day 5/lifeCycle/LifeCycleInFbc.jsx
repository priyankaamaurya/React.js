import React, { useEffect, useState } from 'react'

const LifeCycleInFbc = () => {

    let [count, setCount] = useState(0);

    useEffect(()=> {
        console.log("Mounting Phase");
    }, [])


    useEffect(()=> {
        console.log("Updation Phase");
    },[count])


    useEffect(() => {
        document.title = `Message ${count}`
        console.log("Updation Phase");
    }, [count])  // it shows in the title bar like whatsapp


    useEffect(()=> {
        return ()=>{
            console.log("Unmounting Phase")
        }
    },[])    //it is used to remove an event cleanup function


    let i=0;
        useEffect(()=>{
            let timer = setInterval(()=>{
                console.log("Time", i)
                i++;
            },1000)

        return()=>{
            clearInterval(timer)
        }
    },[])         // return when unmounting will done


  return (
    <div>
        <h1>LifeCycleInFbc</h1>
        <h1>Count : {count} </h1>
        <button onClick={()=>setCount(count+1)}> Increment </button>
        </div>
  )
}

export default LifeCycleInFbc