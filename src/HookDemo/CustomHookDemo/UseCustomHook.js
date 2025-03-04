import React from "react";
import useLocalStorage from './useLocalStorage'
const UseCustomHook = ()=>{
    const[count,setCount] = useLocalStorage("count",0);
    return(<div>
        <div>UseCustom Hook</div>
        <h2>Counter :{count}</h2>
        <button className="btn btn-sm btn-primary" onClick={()=>setCount(count+1)}>Increment</button>
    </div>)
}
export default UseCustomHook;