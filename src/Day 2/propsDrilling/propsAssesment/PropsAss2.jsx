import React from 'react'
import PropsAss3 from './PropsAss3'

const PropsAss2 = (info) => {

    let {data1, data2, data3} = info
  return (
    <div>PropsAss2
        <h1> {data1} </h1>
        <h1> {data2[0]} </h1>
        <h1> {data2[1]} </h1>
        <h1> {data2[2]} </h1>
        <h1> {data3.id} </h1>
        <h1> {data3.name} </h1>
        <h1> {data3.sub} </h1>
        <PropsAss3 info={info}/>
    </div>
  )
}

export default PropsAss2