"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LatestCard = ({ dish }) => {
  return (
    <div>
      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden group">
        {/* Image */}
        <div className="h-56 overflow-hidden">
          <Image
            height={300}
            width={300}
            src={dish.productImage}
            alt={dish.productName}
            className="h-full w-full object-cover group-hover:scale-110 transition duration-300"
          />
        </div>

        {/* Content */}
        <div className="p-5 text-center">
          <h3 className="text-lg font-semibold">{dish.productName}</h3>
          <p className="text-orange-600 font-bold mt-2">
            $ {dish.productPrice}
          </p>

          <Link href={`/menu/${dish._id}`}>
            <button className="mt-4 w-full py-2 rounded-full bg-linear-to-r from-orange-500 to-red-600 text-white font-medium hover:opacity-90 transition">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LatestCard;
