export default function Contact() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-linear-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
          Contact Us
        </h1>
        <p className="mt-4 text-gray-600">
          Have questions or want to make a reservation? Reach out to us and
          we&apos;ll get back to you as soon as possible.
        </p>

        {/* Contact Form */}
        <form className="mt-8 flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-5 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-5 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 rounded-full bg-linear-to-r from-orange-500 to-red-600 text-white font-semibold hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="mt-12 space-y-4 text-gray-700">
          <p>
            <strong>Email:</strong> info@restaurant.com
          </p>
          <p>
            <strong>Phone:</strong> +1 234 567 890
          </p>
          <p>
            <strong>Address:</strong> 123 Delicious Street, Food City
          </p>
        </div>
      </div>
    </section>
  );
}
