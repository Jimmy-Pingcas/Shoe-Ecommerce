"use client";

import { useState, useEffect } from "react";
import { X, Star, ShoppingCart, Minus, Plus, Heart } from "lucide-react";
import type { Shoe } from "../types/shoe";

interface ProductModalProps {
  shoe: Shoe;
  isOpen: boolean;
  onClose: () => void;
}

// Default sizes
const defaultSizes = [7, 8, 9, 10, 11, 12];

export default function ProductModal({
  shoe,
  isOpen,
  onClose,
}: ProductModalProps) {
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [quantity, setQuantity] = useState(1);

  // Close modal when pressing Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }
    alert(`Added ${quantity} x ${shoe.name} (Size ${selectedSize}) to cart!`);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/70 z-50" onClick={onClose} />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          className="bg-white rounded-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-[0_5px_15px_rgba(0,0,0,0.20)] border border-gray-200 relative"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button - Inside modal, top right corner */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 bg-gray-100 hover:bg-gray-200 rounded-full p-1.5 transition-all z-10"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Product Image */}
              <div className="bg-gray-100 rounded-xl overflow-hidden h-80">
                <img
                  src={shoe.image}
                  alt={shoe.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Product Info */}
              <div>
                <p className="text-xs text-gray-500 mb-1">{shoe.category}</p>
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  {shoe.name}
                </h2>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-semibold">{shoe.rating}</span>
                  </div>
                  <span className="text-gray-300">|</span>
                  <span className="text-xs text-gray-500">245 reviews</span>
                </div>

                {/* Price */}
                <div className="mb-4">
                  <p className="text-2xl font-bold text-orange-500">
                    ₱{shoe.price.toLocaleString()}
                  </p>
                  {shoe.oldPrice > shoe.price && (
                    <p className="text-xs text-gray-400 line-through">
                      ₱{shoe.oldPrice.toLocaleString()}
                    </p>
                  )}
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-4">
                  Experience ultimate comfort with the {shoe.name}. Perfect for{" "}
                  {shoe.category.toLowerCase()}, designed for all-day wear with
                  premium materials.
                </p>

                {/* Size Selection */}
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-gray-800 mb-2">
                    Select Size
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {defaultSizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`w-11 h-11 border-2 rounded-lg transition-all ${
                          selectedSize === size
                            ? "border-orange-500 bg-orange-50 text-orange-600 font-semibold"
                            : "border-gray-300 hover:border-orange-300 text-gray-700"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                  {!selectedSize && (
                    <p className="text-xs text-orange-500 mt-1">
                      Please select a size
                    </p>
                  )}
                </div>

                {/* Quantity */}
                <div className="mb-5">
                  <h3 className="text-sm font-semibold text-gray-800 mb-2">
                    Quantity
                  </h3>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-8 h-8 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-lg font-semibold w-8 text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-8 h-8 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={handleAddToCart}
                    className="flex-1 bg-orange-500 text-white font-semibold py-2 rounded-lg hover:bg-orange-600 transition-all text-sm flex items-center justify-center gap-2"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Add to Cart
                  </button>
                  <button className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:border-red-300 hover:bg-red-50 transition-all">
                    <Heart className="w-4 h-4 text-gray-400 hover:text-red-500" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
