import React, { useContext } from 'react'
import Contxt from './Context'

const Child = () => {

    let {data1, data2, data3} = useContext(Contxt)
    console.log(data1, data2, data3)

  return (
    <div>
        <h1> Child : {data1} <br />
             Child : {data2} <br />
             Child : {data3} 
        </h1>

    </div>
  )
}

export default Child