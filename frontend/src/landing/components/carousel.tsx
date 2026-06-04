"use client";

import { useState, useEffect, useCallback } from "react";

interface Slide {
  id: number;
  image: string;
  subtitle: string;
  title: string;
  discount: string;
  cta: string;
}

// STATIC DATA (for now) - kept as fallback/default
const staticSlides: Slide[] = [
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

// SERVICE LAYER - The ONLY file you'll change when switching to dynamic
// This pattern makes the switch seamless
async function getSlides(): Promise<Slide[]> {
  // CURRENT: Return static data
  return staticSlides;

  // FUTURE: Uncomment this when ready for dynamic
  /*
  try {
    const response = await fetch('/api/carousel/slides');
    if (!response.ok) throw new Error('Failed to fetch');
    const data = await response.json();
    return data.slides;
  } catch (error) {
    console.error('Error fetching slides:', error);
    return staticSlides; // Fallback to static data
  }
  */
}

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
    className={`absolute ${direction === "left" ? "left-3 sm:left-4" : "right-3 sm:right-4"} top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 rounded-full transition-colors`}
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
        className={`w-2 h-2 rounded-full transition-all ${
          index === current
            ? "bg-[#F97316] w-6"
            : "bg-white/50 hover:bg-white/80"
        }`}
        aria-label={`Go to slide ${index + 1}`}
      />
    ))}
  </div>
);

const SlideContent = ({
  slide,
  isActive,
}: {
  slide: Slide;
  isActive: boolean;
}) => (
  <div
    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
      isActive ? "opacity-100 z-10" : "opacity-0 z-0"
    }`}
  >
    <img
      src={slide.image}
      alt={slide.title}
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/40" />
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
);

export default function Carousel() {
  const [slides, setSlides] = useState<Slide[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  // Fetch slides on component mount
  useEffect(() => {
    getSlides().then((data) => {
      setSlides(data);
      setLoading(false);
    });
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  const goToSlide = (index: number) => setCurrentSlide(index);

  useEffect(() => {
    if (!isAutoPlaying || slides.length === 0) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide, slides.length]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  // Loading state
  if (loading) {
    return (
      <div className="relative w-full overflow-hidden rounded-2xl shadow-xl bg-gray-200">
        <div className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] flex items-center justify-center">
          <div className="text-gray-500">Loading carousel...</div>
        </div>
      </div>
    );
  }

  // No slides state
  if (slides.length === 0) {
    return null;
  }

  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl shadow-xl"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px]">
        {slides.map((slide, index) => (
          <SlideContent
            key={slide.id}
            slide={slide}
            isActive={index === currentSlide}
          />
        ))}
      </div>

      <NavButton
        onClick={prevSlide}
        direction="left"
        ariaLabel="Previous slide"
      />
      <NavButton onClick={nextSlide} direction="right" ariaLabel="Next slide" />
      <DotIndicator
        total={slides.length}
        current={currentSlide}
        onSelect={goToSlide}
      />
    </div>
  );
}
