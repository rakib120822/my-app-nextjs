
"use client"
import React from "react";
import { toast } from "react-toastify";

const OrderBtn = () => {
    const handleClick = ()=>{
        toast("Your Order Accepted!")
    }
  return (
    <button onClick={handleClick} className="mt-4 w-full py-2 rounded-full bg-linear-to-r from-orange-500 to-red-600 text-white font-medium hover:opacity-90 transition">
      Order Now
    </button>
  );
};

export default OrderBtn;
