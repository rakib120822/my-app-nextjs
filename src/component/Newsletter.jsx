export default function Newsletter() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold bg-linear-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
          Stay Updated
        </h2>
        <p className="mt-4 text-gray-600">
          Subscribe to our newsletter for special offers, chef’s specials, and
          exclusive discounts.
        </p>

        {/* Form */}
        <form className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-80 px-5 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-full bg-linear-to-r from-orange-500 to-red-600 text-white font-semibold hover:opacity-90 transition"
          >
            Subscribe
          </button>
        </form>

        {/* Disclaimer */}
        <p className="mt-4 text-gray-500 text-sm">
          We respect your privacy. No spam ever.
        </p>
      </div>
    </section>
  );
}
