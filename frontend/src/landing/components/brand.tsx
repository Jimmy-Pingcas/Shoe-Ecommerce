"use client";

import { useState, useEffect } from "react";

interface Brand {
  name: string;
  logo: string;
}

// Static data (fallback/default)
const staticBrands: Brand[] = [
  { name: "Nike", logo: "N" },
  { name: "Adidas", logo: "A" },
  { name: "Puma", logo: "P" },
  { name: "New Balance", logo: "NB" },
  { name: "Converse", logo: "C" },
  { name: "Vans", logo: "V" },
  { name: "Reebok", logo: "R" },
  { name: "Under Armour", logo: "UA" },
  { name: "ASICS", logo: "A" },
  { name: "Fila", logo: "F" },
  { name: "Jordan", logo: "J" },
  { name: "Skechers", logo: "S" },
];

// SERVICE LAYER - The ONLY file/function you'll change when switching to dynamic
async function getBrands(): Promise<Brand[]> {
  // CURRENT: Return static data
  return staticBrands;

  // FUTURE: Uncomment this when ready for dynamic
  /*
  try {
    const response = await fetch('/api/brands');
    if (!response.ok) throw new Error('Failed to fetch brands');
    const data = await response.json();
    return data.brands;
  } catch (error) {
    console.error('Error fetching brands:', error);
    return staticBrands; // Fallback to static data
  }
  */
}

export default function Brand() {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getBrands().then((data) => {
      setBrands(data);
      setLoading(false);
    });
  }, []);

  // Loading state
  if (loading) {
    return (
      <section className="bg-gray-50 py-16 w-full">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Popular Brands
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow-md p-8 animate-pulse"
              >
                <div className="h-12 w-12 bg-gray-200 rounded-full mx-auto mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-16 mx-auto"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gray-50 py-16 w-full">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Popular Brands</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="bg-white rounded-lg shadow-md p-8 flex items-center justify-center hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-800 mb-2">
                  {brand.logo}
                </div>
                <p className="text-sm text-gray-600">{brand.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
