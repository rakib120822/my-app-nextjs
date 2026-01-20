import Image from "next/image";

const specials = [
  {
    id: 1,
    name: "Spicy Chicken Burger",
    price: "$8.99",
    image:
      "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Italian Cheese Pizza",
    price: "$12.50",
    image:
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Grilled Beef Steak",
    price: "$18.99",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Creamy Pasta",
    price: "$10.99",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Popular() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold bg-linear-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
          Chef Specials
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Our top-selling dishes, prepared with love and the finest ingredients.
        </p>

        {/* Specials Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {specials.map((dish) => (
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
          ))}
        </div>
      </div>
    </section>
  );
}
