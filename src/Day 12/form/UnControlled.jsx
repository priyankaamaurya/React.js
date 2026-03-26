import React, { useRef } from 'react'

const UnControlled = () => {

    let userNameRef = useRef()
    let passwordRef = useRef()

    function handleSubmit(e){
        e.preventDefault()
        console.log(userNameRef)
        console.log(passwordRef)

        let formData = {
            userName : userNameRef.current.value ,
            password : passwordRef.current.value
        } 
        console.log(formData)
    }

  return (
    <div>
        <h1> UnControlled Form </h1>
        <form onSubmit={handleSubmit}>
            <input type="text" ref={userNameRef} />
            <input type="password" ref={passwordRef}/>
            <button>SUBMIT</button>

        </form>

    </div>
  )
}

export default UnControlled