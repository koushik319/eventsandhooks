import React, { useState } from "react";

const HandlingInputEvent=()=>{
    const [username,setUsername]= useState("");
    const handleChange=(event)=>{
           setUsername(event.target.value);
           console.log(event.target.value);
    }
   
    return(<div>

            <input type="text" value={username} onChange={handleChange}/>
            <p>Username : {username}</p>

    </div>)
}

export default HandlingInputEvent