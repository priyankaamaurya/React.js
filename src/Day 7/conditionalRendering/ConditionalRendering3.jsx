import React from 'react'

const ConditionalRendering3 = () => {

    let message = ["Notification1", "Notification2", "Notification3"]
  return (
    <div>
        Notifications
        {/* ternary operator */}
        {/* { message.length>1 ? <sup> {message.length}</sup> : " "}  */}
        {/* bcoz of string it create new node to avoid this use short-circuit operator */}

        {/* short-circuit operator */}
        {message.length>1 && <sup> {message.length}</sup>}
        </div>
  ) 
}

export default ConditionalRendering3