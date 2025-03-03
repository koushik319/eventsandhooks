import React, { useState } from "react";

const HandlingEventWithState=()=>{
    const [count ,setCount]= useState(0);
  
    return(<div>
        <p>Count : {count}</p>
        <button onClick={()=>setCount(count+1)}>Increment</button>

    </div>)
}

export default HandlingEventWithState;