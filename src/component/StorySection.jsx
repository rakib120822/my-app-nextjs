import Image from "next/image";
import React from "react";

const StorySection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4">
        {/* Chef / Restaurant Image */}
        <Image
          height={300}
          width={300}
          src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80"
          alt="Chef preparing food"
          className="w-full md:w-1/2 rounded-xl"
        />

        {/* Text Content */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-extrabold bg-linear-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
            Our Story
          </h2>
          <p className="mt-4 text-gray-600">
            We serve the finest dishes prepared with love and fresh ingredients.
            Our chefs create culinary experiences you won’t forget.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
