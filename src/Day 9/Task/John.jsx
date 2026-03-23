import React, { useState } from 'react'
import './style.css'

const John = () => {

    const[theme, setTheme] = useState("dark");

    const toggleTheme = () => {
        setTheme(theme == "dark" ? "light" : "dark");
    };

  return (
    <div className={`box ${theme}`}>

        <div className='nav'>
            <h2>John</h2>

            <h1>I'm John Doe <br />
            I code cool websites</h1>

            <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit? <br /> 
            Officiis ex, optio sequi autem quaerat sit debitis . </p>

        <div className='body'>
            <div className='box2'> 
                <h4> My Portfolio</h4>
            </div>
        
            <div className='box3'> 
                <h4> Contact Me</h4>
            </div>
        </div>
        </div>
    
        <div className='sidebar'>
            <button className='corner' onClick={toggleTheme}>
              {theme === "dark" ? "☀️" : "🌙"}
             </button>
        </div>

    </div>
  )
}

export default John