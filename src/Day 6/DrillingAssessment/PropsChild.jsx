import React, { Fragment } from 'react'

const PropsChild = ({users}) => {
    // console.log(users)


  return (
    <div>      
        <h1>PropsChild</h1>
        {
            users.map((data)=>{

                let{id, name, email, profile, hobbies, isActive, roles} = data
                console.log(id, name, email, profile, hobbies, isActive, roles)

                let{age, gender, address} = profile
                console.log(age, gender, address)

                let{street, city, zip} = address 
                console.log(street, city, zip)

                return(
                    <Fragment key={id}>
                        <h3> {id}  </h3>
                        <h4> {name} </h4>    
                        <h4> {email} </h4>
                        <h4> {hobbies} </h4>
                        <h4> {roles} </h4>  
                    </Fragment>
                )
            })
        }

    </div>
  )
}

export default PropsChild