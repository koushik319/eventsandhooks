import React from "react";
import { useContext } from "react";
import { AppContext } from "./UserContext";

const UserConsumer=()=>{
    const userData=useContext(AppContext);
   return(<div>
   
       <h2>UseContext</h2>
       <h3>Hello, {userData.firstName} {userData.lastName} Good Day!... {Date()}</h3>
    
   </div>)
}

export default UserConsumer;