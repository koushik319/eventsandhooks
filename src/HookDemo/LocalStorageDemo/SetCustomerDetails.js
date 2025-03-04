import React from "react";

const SetCustomerDetails=()=>{
    const CustomerData={CustomerCode: 101 , CustomerName:'Shiva'};
    localStorage.setItem("Customer",JSON.stringify(CustomerData));
    return(<div>
        <div>Set Custmer details </div>
        <p className="text-success">Data Assigned Successfully...</p>
    </div>)
}

export default SetCustomerDetails;