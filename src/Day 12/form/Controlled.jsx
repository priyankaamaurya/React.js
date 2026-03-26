import React, { useState } from 'react'

const Controlled = () => {

    let [formData, setFormData] = useState({
        userName : "",
        password : ""
    })

    function handleChange(e){
        let {name,value} = e.target;
        setFormData({...formData, [name]: value})
    }
    // console.log(formData)    // used to show on console

    function handleSubmit(e){
        e.preventDefault()
        console.log(formData)
        setFormData({
            userName: "",
            password: ''
        })
    }

  return (
    <div> 
        <h1> Controlled Form </h1> 
        <form onSubmit={handleSubmit}>
        <input type="text" name='userName' value={formData.userName} onChange={handleChange}/>
        <input type="password" name='password' value={formData.password} onChange={handleChange}/>
        <button> SUBMIT</button>

        </form>
    </div>
  )
}

export default Controlled