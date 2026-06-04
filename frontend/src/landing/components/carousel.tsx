"use client";

import { useState, useEffect, useCallback } from "react";
import shoes from "../../aaSampleData/shoe.json";
import ProductModal from "./productDetailsModal";

interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  discount: string;
  cta: string;
}

// Get featured products (first 3 from shoes data)
const featuredSlides: Slide[] = shoes.slice(0, 3).map((shoe, index) => ({
  id: shoe.id,
  image: shoe.image,
  title: shoe.name,
  subtitle:
    index === 0
      ? "New Arrivals"
      : index === 1
        ? "Limited Edition"
        : "Best Seller",
  discount: `${Math.floor(Math.random() * 30) + 10}% Off`,
  cta: "Shop Now",
}));

const NavButton = ({
  onClick,
  direction,
  ariaLabel,
}: {
  onClick: () => void;
  direction: "left" | "right";
  ariaLabel: string;
}) => (
  <button
    onClick={onClick}
    className={`absolute ${direction === "left" ? "left-3 sm:left-4" : "right-3 sm:right-4"} top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-orange-500 text-gray-800 hover:text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm shadow-md hover:shadow-lg`}
    aria-label={ariaLabel}
  >
    <svg
      className="w-5 h-5 sm:w-6 sm:h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d={direction === "left" ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
      />
    </svg>
  </button>
);

const DotIndicator = ({
  total,
  current,
  onSelect,
}: {
  total: number;
  current: number;
  onSelect: (index: number) => void;
}) => (
  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
    {Array.from({ length: total }).map((_, index) => (
      <button
        key={index}
        onClick={() => onSelect(index)}
        className={`w-2 h-2 rounded-full transition-all duration-200 ${
          index === current
            ? "bg-orange-500 w-6"
            : "bg-white/60 hover:bg-orange-300"
        }`}
        aria-label={`Go to slide ${index + 1}`}
      />
    ))}
  </div>
);

const SlideContent = ({
  slide,
  isActive,
  onCtaClick,
  onImageClick,
}: {
  slide: Slide;
  isActive: boolean;
  onCtaClick: () => void;
  onImageClick: () => void;
}) => (
  <div
    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
      isActive ? "opacity-100 z-10" : "opacity-0 z-0"
    }`}
  >
    {/* Clickable Image */}
    <div onClick={onImageClick} className="w-full h-full cursor-pointer">
      <img
        src={slide.image}
        alt={slide.title}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent pointer-events-none" />
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white pointer-events-none">
      <p className="text-sm sm:text-base md:text-lg tracking-wider mb-2 uppercase">
        {slide.subtitle}
      </p>
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
        {slide.title}
      </h1>
      <p className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 text-orange-400">
        {slide.discount}
      </p>
      <button
        onClick={onCtaClick}
        className="pointer-events-auto px-6 py-2 sm:px-8 sm:py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-all duration-200 shadow-md hover:shadow-lg"
      >
        {slide.cta}
      </button>
    </div>
  </div>
);

export default function Carousel() {
  const [slides, setSlides] = useState<Slide[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setSlides(featuredSlides);
    setLoading(false);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  const goToSlide = (index: number) => setCurrentSlide(index);

  // Handle CTA click - open modal
  const handleCtaClick = (slide: Slide) => {
    const product = shoes.find((p) => p.id === slide.id);
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  // Handle image click - open modal
  const handleImageClick = (slide: Slide) => {
    const product = shoes.find((p) => p.id === slide.id);
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  useEffect(() => {
    if (!isAutoPlaying || slides.length === 0) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide, slides.length]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  if (loading) {
    return (
      <div className="relative w-full overflow-hidden rounded-xl border border-gray-200 shadow-[0_5px_15px_rgba(0,0,0,0.20)] bg-gray-200">
        <div className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] flex items-center justify-center">
          <div className="text-gray-500">Loading carousel...</div>
        </div>
      </div>
    );
  }

  if (slides.length === 0) {
    return null;
  }

  // Find the full shoe object for the modal
  const fullProduct = selectedProduct
    ? shoes.find((p) => p.id === selectedProduct.id)
    : null;

  return (
    <>
      <div
        className="relative w-full overflow-hidden rounded-xl border border-gray-200 shadow-[0_5px_15px_rgba(0,0,0,0.20)] transition-all duration-200 hover:shadow-[0_12px_35px_rgba(249,115,22,0.4),0_4px_10px_rgba(0,0,0,0.08)]"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px]">
          {slides.map((slide, index) => (
            <SlideContent
              key={slide.id}
              slide={slide}
              isActive={index === currentSlide}
              onCtaClick={() => handleCtaClick(slide)}
              onImageClick={() => handleImageClick(slide)}
            />
          ))}
        </div>

        <NavButton
          onClick={prevSlide}
          direction="left"
          ariaLabel="Previous slide"
        />
        <NavButton
          onClick={nextSlide}
          direction="right"
          ariaLabel="Next slide"
        />
        <DotIndicator
          total={slides.length}
          current={currentSlide}
          onSelect={goToSlide}
        />
      </div>

      {/* Product Modal */}
      {fullProduct && (
        <ProductModal
          shoe={fullProduct}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}
