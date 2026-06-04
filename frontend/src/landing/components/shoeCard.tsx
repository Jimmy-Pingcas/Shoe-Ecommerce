"use client";

import { useState } from "react";
import type { Shoe } from "../types/shoe";
import ProductModal from "./productDetailsModal";

export default function ShoeCard({ shoe }: { shoe: Shoe }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleAddToCartClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    alert(`Added ${shoe.name} to cart!`);
  };

  return (
    <>
      <div className="group w-56 bg-gray-50 rounded-xl overflow-hidden shadow-[0_5px_15px_rgba(0,0,0,0.20)] border transition-all duration-200 hover:border-orange-200 hover:shadow-[0_12px_35px_rgba(249,115,22,0.4),0_4px_10px_rgba(0,0,0,0.08)]">
        {/* Image - Clickable */}
        <div
          onClick={handleImageClick}
          className="bg-gray-100 h-40 p-3 overflow-hidden cursor-pointer"
        >
          <img
            src={shoe.image}
            alt={shoe.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Content */}
        <div className="p-3">
          <h2 className="text-sm font-semibold text-gray-800 truncate">
            {shoe.name}
          </h2>

          <p className="text-xs text-gray-500">{shoe.category}</p>

          {/* Rating */}
          <div className="flex items-center gap-1 mt-1">
            <span className="text-yellow-500 text-xs">★★★★★</span>
            <span className="text-xs text-gray-500">({shoe.rating})</span>
          </div>

          {/* Price */}
          <div className="mt-2">
            <p className="text-lg font-bold text-orange-500">₱{shoe.price}</p>
            <p className="text-xs text-gray-400 line-through">
              ₱{shoe.oldPrice}
            </p>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCartClick}
            className="w-full mt-3 bg-orange-500 text-white text-sm font-medium py-2 rounded-lg transition-colors duration-200 hover:bg-orange-600"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Modal */}
      <ProductModal
        shoe={shoe}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
