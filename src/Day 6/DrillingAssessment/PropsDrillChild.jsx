import React, { Fragment } from 'react'

const PropsDrillChild = (props) => {
    // console.log(props)
    let {obj} = props
    console.log(obj)

  return (
    <div>
        <h1>PropsDrillChild</h1>
        {
            obj.map((data)=>{
                // console.log(data)
                let{id, name} = data 
                console.log(id, name)
                return(
                    <Fragment key={id}>
                        <h1>{id}{name}</h1>

                    </Fragment>
                )
            })
        }
        </div>
  )
}

export default PropsDrillChild
