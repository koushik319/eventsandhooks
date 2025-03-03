import React from "react";


const handleClick =()=>{
    alert("Button Clicked");
};

const ButtonClickDemo =()=>{
    return(
        <div>
           
           <p> function without parameter</p>
           <button onClick={handleClick}>Click Me</button>
        </div>
    )
}

export default ButtonClickDemo;