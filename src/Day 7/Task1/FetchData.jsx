import React, { useState } from 'react'

const FetchData = () => {

    let [apiData, setApiData] = useState([])

    async function handleData(){
        // console.log("Function is Called")
        let res = await fetch("https://fakestoreapi.com/products")
        // console.log(res)
        let actualData = await res.json()
        setApiData(actualData)
        // console.log(actualData)
    }

  return (
    <div>
        <h1>Fetch API</h1>
        <button onClick={handleData}>Fetch Data</button>
        <div>
        {
            apiData.map((a)=>{
                // console.log(a)
                let {id, title, price, description, category, image} = a
                console.log(id, title, price, description, category, image)

                return(
                    <div key={id}> 
                        <h3> Id : {id} </h3>
                        <h3> Title : {title} </h3>
                        <h3> Price : {price} </h3>
                        <h3> Description : {description} </h3>
                        <h3> Category : {category} </h3>
                        <h3> Image : {<img src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png"/> } </h3>
                    </div>
                )
            })
        }
        </div>
    </div>
  )
}

export default FetchData