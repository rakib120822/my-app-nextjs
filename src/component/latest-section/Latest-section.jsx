import Image from "next/image";
import LatestCard from "../cards/LatestCard";

const latestDishes = [
  {
    id: 1,
    name: "Spicy Chicken Burger",
    price: "$8.99",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
  },
  {
    id: 2,
    name: "Italian Cheese Pizza",
    price: "$12.50",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
  },
  {
    id: 3,
    name: "Grilled Beef Steak",
    price: "$18.99",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1",
  },
  {
    id: 4,
    name: "Creamy Pasta",
    price: "$10.99",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
  },
];

export default async function LatestSection() {
  const data = await fetch("http://localhost:8080/latest");
  const foods = await data.json();
  console.log({ foods });

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold">
            <span className="bg-linear-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
              Latest Dishes
            </span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Freshly prepared meals, crafted by our chefs just for you.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {latestDishes.map((dish) => (
            <LatestCard key={dish._id} dish={dish} />
          ))}
        </div>
      </div>
    </section>
  );
}
