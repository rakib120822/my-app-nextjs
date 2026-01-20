"use client";
import Image from "next/image";
import React from "react";

const LatestCard = ({ dish }) => {
  return (
    <div>
      <div
        key={dish.id}
        className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden group"
      >
        {/* Image */}
        <div className="h-56 overflow-hidden">
          <Image
            height={300}
            width={300}
            src={dish.image}
            alt={dish.name}
            className="h-full w-full object-cover group-hover:scale-110 transition duration-300"
          />
        </div>

        {/* Content */}
        <div className="p-5 text-center">
          <h3 className="text-lg font-semibold">{dish.name}</h3>
          <p className="text-orange-600 font-bold mt-2">{dish.price}</p>

          <button className="mt-4 w-full py-2 rounded-full bg-linear-to-r from-orange-500 to-red-600 text-white font-medium hover:opacity-90 transition">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default LatestCard;
