import Image from "next/image";
import Link from "next/link";

export default function MenuCard({ product }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden group transition">
      {/* Product Image */}
      <div className="h-56 overflow-hidden">
        <Image
          height={300}
          width={300}
          src={product.productImage}
          alt={product.productName}
          className="h-full w-full object-cover group-hover:scale-110 transition duration-300"
        />
      </div>

      {/* Product Info */}
      <div className="p-5 text-center">
        <h3 className="text-lg font-semibold">{product.productName}</h3>
        <p className="text-gray-500 text-sm mt-1">{product.productCategory}</p>

        <div className="mt-2 flex justify-center items-center gap-2">
          {product.oldPrice && (
            <span className="line-through text-gray-400">
              ${product.oldPrice}
            </span>
          )}
          <span className="text-orange-600 font-bold text-lg">
            ${product.productPrice}
          </span>
          {product.discountPercentage && (
            <span className="text-green-500 text-sm">
              -{product.discountPercentage}%
            </span>
          )}
        </div>

        <Link href={`/menu/${product._id}`}>
          <button className="btn-primary mt-5 w-full">Details</button>
        </Link>
      </div>
    </div>
  );
}
