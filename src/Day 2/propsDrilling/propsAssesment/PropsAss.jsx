import React from 'react'
import PropsAss2 from './PropsAss2';

const PropsAss = () => {

    let data1 = 1234;
    let data2 = ["HTML", "CSS", "JS"]
    let data3 = {
        id : 1,
        name : "PROPSASS",  
        sub : "REACT.JS"
    }

  return (
    <div>
        <h1> PropsAss </h1>
        <PropsAss2 data1={data1} data2={data2} data3={data3}/>
        </div>
  )
}

export default PropsAss