import React from "react";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all p-6 flex flex-col items-center text-center">
      <img
        src={product.image}
        alt={product.title}
        className="w-56 h-56 object-contain mb-6"
      />
      <h3 className="text-2xl font-semibold text-gray-900 mb-2">{product.title}</h3>
      <p className="text-gray-500 mb-4">{product.description}</p>
      <p className="text-xl font-bold text-gray-900 mb-6">${product.price}</p>
      <button className="bg-black text-white py-2 px-8 rounded-full hover:bg-gray-800 transition">
        View Details
      </button>
    </div>
  );
}
