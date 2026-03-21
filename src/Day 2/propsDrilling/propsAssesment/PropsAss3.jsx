import React from 'react'

const PropsAss3 = ({info}) => {

     let { data1, data2, data3} = info
  return (
    <div> PropsAss3
        <h3>{data1}</h3>
        <h3>{data2[0]}</h3>
        <h3>{data2[1]}</h3>
        <h3>{data2[2]}</h3>
        <h3>{data3.id}</h3>
        <h3>{data3.name}</h3>
        <h3>{data3.sub}</h3>
    </div>
  )
}

export default PropsAss3