"use client";

import { useState, useEffect, useCallback } from "react";

interface Slide {
  id: number;
  image: string;
  subtitle: string; // Changed from 'title' to match your design
  title: string; // Main title
  discount: string; // Discount text
  cta: string;
}

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  const slides: Slide[] = [
    {
      id: 1,
      image: "/images/carousel/shoes-1.jpg",
      subtitle: "New Arrivals",
      title: "Summer Collection 2026",
      discount: "Up to 30% Off",
      cta: "Shop Now",
    },
    {
      id: 2,
      image: "/images/carousel/shoes-2.jpg",
      subtitle: "Limited Edition",
      title: "Premium Running Shoes",
      discount: "Special Offer",
      cta: "Shop Now",
    },
    {
      id: 3,
      image: "/images/carousel/shoes-3.jpg",
      subtitle: "Classic Style",
      title: "Timeless Sneakers",
      discount: "20% Off Selected Items",
      cta: "Explore",
    },
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev: number) =>
      prev === slides.length - 1 ? 0 : prev + 1,
    );
  }, [slides.length]);

  const prevSlide = (): void => {
    setCurrentSlide((prev: number) =>
      prev === 0 ? slides.length - 1 : prev - 1,
    );
  };

  const goToSlide = (index: number): void => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const handleMouseEnter = (): void => setIsAutoPlaying(false);
  const handleMouseLeave = (): void => setIsAutoPlaying(true);

  return (
    <div className="w-full max-w-full mx-auto">
      <div
        className="relative w-full overflow-hidden rounded-2xl shadow-xl"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px]">
          {slides.map((slide: Slide, index: number) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              {/* Background Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover" // Keep cover for full background effect
              />

              {/* Dark Overlay for better text readability */}
              <div className="absolute inset-0 bg-black/40" />

              {/* Centered Text Content - Matching your design */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
                <p className="text-sm sm:text-base md:text-lg tracking-wider mb-2">
                  {slide.subtitle}
                </p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                  {slide.title}
                </h1>
                <p className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 text-[#F97316]">
                  {slide.discount}
                </p>
                <button className="px-6 py-2 sm:px-8 sm:py-3 bg-white text-[#111111] font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300">
                  {slide.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 rounded-full transition-colors"
          aria-label="Previous slide"
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
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 rounded-full transition-colors"
          aria-label="Next slide"
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
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_: Slide, index: number) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide
                  ? "bg-[#F97316] w-6"
                  : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
