import React from "react";

const Greeting=(name)=>{
  alert(`Hello ${name} !`);
}

const FunctionWithParameterComp =()=>{
    return(
        <div>
            <p>FunctionWithParameterComp</p>
            <button onClick={()=>Greeting("Shiva")}>Greet</button>
        </div>
    )
}
           
export default FunctionWithParameterComp;