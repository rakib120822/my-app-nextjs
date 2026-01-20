import React from "react";

const LoadingSkeleton = ({ count = 4 }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {Array.from({ length: count }).map((_, idx) => (
        <div
          key={idx}
          className="bg-white rounded-2xl shadow-md overflow-hidden animate-pulse"
        >
          {/* Image skeleton */}
          <div className="h-56 bg-gray-200"></div>

          {/* Content skeleton */}
          <div className="p-5 space-y-3">
            <div className="h-5 bg-gray-200 rounded w-3/4 mx-auto"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
            <div className="h-6 bg-gray-200 rounded w-1/3 mx-auto mt-2"></div>
            <div className="h-10 bg-gray-300 rounded-full w-full mt-4"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LoadingSkeleton;
