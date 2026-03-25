import React from 'react'
import Contxt from './Context'
import Parent from './Parent'

const GrandParent = () => {

    let data1 = "Hello everyone!!"
    let data2 = "How are you ?"
    let data3 = "Today we are going to learn Context API"
    let data4 = "How is it working"
    
  return (
    <div>
        {/* <h1> GrandParent </h1> */}
        <Contxt.Provider value={{data1,data2,data3,data4}}> 
            <Parent/>
        </Contxt.Provider>
    </div>
  )
}

export default GrandParent