import React,{useState,useEffect} from "react";

const UseEffect=()=>{

const[count,setCount] = useState(0);

const countUpdate=(val)=>{
    if(val==="inc") return setCount(count+1)
        if(val==="dec") return count>0 ? setCount(count-1) : setCount(0);
}

  //   useEffect(() => {
  //     document.title = count;
  //     //runs on every render
  //   });
  // useEffect(() => {
  //     document.title = count;
  //     //runs only on first render
  //   },[]);

  useEffect(() => {
    document.title = count;
    //runs on first render
    //And any time dependency value will changes
  }, [count]);

return (
    <div>
      <div className="container-fluid">
        <p className="display-6 primary">Use Effect Demo</p>
        <p className="display-5">{count}</p>

        <button
          type="button"
          className="btn btn-success btn-md"
          onClick={() => countUpdate("inc")}
        >
          Increment
        </button>
        <button
          type="button"
          className="btn btn-danger btn-md"
          onClick={() => countUpdate("dec")}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};
export default UseEffect;