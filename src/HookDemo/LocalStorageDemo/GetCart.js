import React from "react";

const GetCart=()=>{
    const cartitems = JSON.parse(localStorage.getItem("Cart"));
    console.log(cartitems);
    return(<div>
        <div>Get cart details </div>
        <p>{cartitems.ItemName}</p>
    </div>)
}

export default GetCart;