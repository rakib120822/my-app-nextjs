"use client";
import React from "react";
import { toast } from "react-toastify";

const AddToCart = () => {
  const handleOnclick = () => {
    toast("Added To the Cart");
  };

  return (
    <button
      onClick={handleOnclick}
      className="w-full py-3 rounded-full bg-linear-to-r from-orange-500 to-red-600 text-white font-semibold hover:opacity-90 transition"
    >
      Add to Cart
    </button>
  );
};

export default AddToCart;
