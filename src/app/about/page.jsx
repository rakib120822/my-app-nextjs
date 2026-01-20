import Image from "next/image";

export default function About() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        {/* Image */}
        <div className="md:w-1/2">
          <Image
            height={300}
            width={300}
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80"
            alt="Our Story"
            className="w-full rounded-2xl shadow-lg"
          />
        </div>

        {/* Text */}
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-linear-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
            About Us
          </h1>
          <p className="mt-6 text-gray-600">
            Welcome to our restaurant! We serve the finest dishes prepared with
            fresh ingredients and love. Our chefs craft culinary experiences
            that delight your taste buds and make every meal memorable.
          </p>
          <p className="mt-4 text-gray-600">
            We focus on quality, taste, and customer satisfaction. From
            traditional recipes to modern flavors, we bring the best food
            experience to your table.
          </p>
        </div>
      </div>
    </section>
  );
}
