import React from "react";

const SetCart=()=>{
    const items = {ItemName:'Biryani', ItemNo:1};
    localStorage.setItem("Cart",JSON.stringify(items));
    return(<div>
        <div>Cart Items </div>
    </div>)
}

export default SetCart;