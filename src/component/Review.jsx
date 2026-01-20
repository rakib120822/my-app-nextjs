import React from "react";

const Review = () => {
  return (
    <div>
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 bg-linear-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
            What Our Customers Say
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow shadow-orange-500 hover:shadow-md transition">
              <p className="text-gray-600">
                “Best pizza ever! Fast delivery and fresh ingredients.”
              </p>
              <h3 className="mt-4 font-semibold">– John Doe</h3>
            </div>
            <div className="bg-white p-6 rounded-xl shadow shadow-orange-500 hover:shadow-md transition ">
              <p className="text-gray-600">
                “Amazing desserts. The chocolate cake is to die for!”
              </p>
              <h3 className="mt-4 font-semibold">– Sarah Lee</h3>
            </div>
            <div className="bg-white p-6 rounded-xl shadow shadow-orange-500 hover:shadow-md transition">
              <p className="text-gray-600">
                “Fresh, tasty, and delivered hot. Highly recommend!”
              </p>
              <h3 className="mt-4 font-semibold">– Ali Khan</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Review;
