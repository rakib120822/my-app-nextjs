"use client";

import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function AddProductForm() {
  const [formData, setFormData] = useState({
    productName: "",
    productCategory: "",
    productPrice: "",
    oldPrice: "",
    discountPercentage: "",
    productDescription: "",
    ingredients: "",
    tags: "",
    rating: "",
    inStock: true,
    quantity: "",
    productStatus: "New",
    productSlug: "",
    productImage: "",
    sellerEmail: "",
    sellerUserName: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      ingredients: formData.ingredients.split(",").map((i) => i.trim()),
      tags: formData.tags.split(",").map((i) => i.trim()),
      productPrice: parseFloat(formData.productPrice),
      oldPrice: parseFloat(formData.oldPrice),
      discountPercentage: parseFloat(formData.discountPercentage),
      rating: parseFloat(formData.rating || 0),
      quantity: parseInt(formData.quantity || 0),
      created_At: new Date().toISOString(),
      sellerId: "seller_06", // optional if static
      ratingCount: 0,
      reviews: [],
    };

    try {
      const res = await fetch("https://next-js-server-project.vercel.app/product", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        toast.success("Product added successfully!");
        setFormData({
          productName: "",
          productCategory: "",
          productPrice: "",
          oldPrice: "",
          discountPercentage: "",
          productDescription: "",
          ingredients: "",
          tags: "",
          rating: "",
          inStock: true,
          quantity: "",
          productStatus: "New",
          productSlug: "",
          productImage: "",
          sellerEmail: "",
          sellerUserName: "",
        });
      } else {
        toast.error("Failed to add product.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md mt-8">
      <Toaster position="top-right" />
      <h2 className="text-2xl font-bold mb-6 text-center">Add New Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Product Name & Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="productName"
            placeholder="Product Name"
            value={formData.productName}
            onChange={handleChange}
            required
            className="p-2 border rounded"
          />
          <input
            type="text"
            name="productCategory"
            placeholder="Product Category"
            value={formData.productCategory}
            onChange={handleChange}
            required
            className="p-2 border rounded"
          />
        </div>

        {/* Prices & Discount */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="number"
            step="0.01"
            name="productPrice"
            placeholder="Price"
            value={formData.productPrice}
            onChange={handleChange}
            required
            className="p-2 border rounded"
          />
          <input
            type="number"
            step="0.01"
            name="oldPrice"
            placeholder="Old Price"
            value={formData.oldPrice}
            onChange={handleChange}
            className="p-2 border rounded"
          />
          <input
            type="number"
            step="0.01"
            name="discountPercentage"
            placeholder="Discount %"
            value={formData.discountPercentage}
            onChange={handleChange}
            className="p-2 border rounded"
          />
        </div>

        {/* Description */}
        <textarea
          name="productDescription"
          placeholder="Product Description"
          value={formData.productDescription}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          rows={3}
          required
        />

        {/* Ingredients & Tags */}
        <input
          type="text"
          name="ingredients"
          placeholder="Ingredients (comma-separated)"
          value={formData.ingredients}
          onChange={handleChange}
          className="p-2 border rounded mr-5"
        />
        <input
          type="text"
          name="tags"
          placeholder="Tags (comma-separated)"
          value={formData.tags}
          onChange={handleChange}
          className="p-2 border rounded"
        />

        {/* Quantity & Stock */}
        <div className="flex items-center space-x-4">
          <input
            type="number"
            name="quantity"
            placeholder="Quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="p-2 border rounded w-32"
          />
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="inStock"
              checked={formData.inStock}
              onChange={handleChange}
              className="w-5 h-5"
            />
            <span>In Stock</span>
          </label>
        </div>

        {/* Image & Seller Info */}
        <input
          type="text"
          name="productImage"
          placeholder="Product Image URL"
          value={formData.productImage}
          onChange={handleChange}
          className="p-2 border rounded "
        />
        <input
          type="email"
          name="sellerEmail"
          placeholder="Seller Email"
          value={formData.sellerEmail}
          onChange={handleChange}
          className="p-2 border rounded mx-4"
        />
        <input
          type="text"
          name="sellerUserName"
          placeholder="Seller User Name"
          value={formData.sellerUserName}
          onChange={handleChange}
          className="p-2 border rounded"
        />

        <button
          type="submit"
          className="w-full py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition"
        >
          Submit Product
        </button>
      </form>
    </div>
  );
}
