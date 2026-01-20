import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";
import AddToCart from "@/component/button/AddToCart";
import { ToastContainer } from "react-toastify";

// Replace this with API fetch in real app
// const product = {
//   _id: "6933a597eaf04ca16022d94c",
//   productName: "Berry Smoothie",
//   productCategory: "Beverages",
//   productPrice: 4.5,
//   oldPrice: 5,
//   discountPercentage: 10,
//   productDescription:
//     "A refreshing blend of strawberries, blueberries, and yogurt.",
//   ingredients: ["Strawberry", "Blueberry", "Yogurt"],
//   tags: ["drink", "smoothie", "healthy"],
//   rating: 4.9,
//   ratingCount: 33,
//   inStock: true,
//   productStatus: "New",
//   productSlug: "berry-smoothie",
//   productImage:
//     "https://cookingformysoul.com/wp-content/uploads/2022/05/triple-berry-smoothie-feat-min.jpg",
// };

export default async function DetailPage({ params }) {
  const { detailId } = await params;
  console.log(detailId);
    const data = await fetch(`http://localhost:8080/product/${detailId}`);
    const product = await data.json();

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-12">
        {/* Product Image */}
        <div className="md:w-1/2 relative h-80 md:h-125 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={product.productImage}
            alt={product.productName}
            fill
            className="object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="md:w-1/2 flex flex-col justify-start">
          <h1 className="text-4xl font-extrabold mb-4">
            {product.productName}
          </h1>

          {/* Category & Status */}
          <p className="text-gray-500 mb-2">
            {product.productCategory} •{" "}
            <span className="text-green-600 font-semibold">
              {product.productStatus}
            </span>
          </p>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.round(product.rating)
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-gray-500 text-sm">
              ({product.ratingCount} reviews)
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-4 mb-6">
            {product.oldPrice && (
              <span className="line-through text-gray-400 text-lg">
                ${product.oldPrice}
              </span>
            )}
            <span className="text-2xl font-bold text-orange-600">
              ${product.productPrice}
            </span>
            {product.discountPercentage && (
              <span className="text-green-500 font-medium">
                -{product.discountPercentage}%
              </span>
            )}
          </div>

          {/* Description */}
          <p className="text-gray-600 mb-4">{product.productDescription}</p>

          {/* Ingredients */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Ingredients:</h3>
            <ul className="flex flex-wrap gap-2">
              {product.ingredients.map((ing, idx) => (
                <li
                  key={idx}
                  className="px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-sm"
                >
                  {ing}
                </li>
              ))}
            </ul>
          </div>

          {/* Tags */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Tags:</h3>
            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full bg-gray-200 text-gray-700 text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Add to Cart Button */}
          <AddToCart />
          <ToastContainer />
        </div>
      </div>
    </section>
  );
}
