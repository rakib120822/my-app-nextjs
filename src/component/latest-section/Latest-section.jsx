import LatestCard from "../cards/LatestCard";

export default async function LatestSection() {
  const data = await fetch("https://next-js-server-project.vercel.app/latest");
  const foods = await data.json();

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
          {foods.map((dish) => (
            <LatestCard key={dish._id} dish={dish} />
          ))}
        </div>
      </div>
    </section>
  );
}
