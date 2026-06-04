"use client";

import { useState, useEffect } from "react";
import { Truck, Shield, CreditCard, Package } from "lucide-react";

interface InfoItem {
  id: number;
  icon: string;
  title: string;
  description: string;
}

// Static data (fallback)
const staticInfoItems: InfoItem[] = [
  {
    id: 1,
    icon: "Truck",
    title: "Free Shipping",
    description: "Free delivery on orders over $100",
  },
  {
    id: 2,
    icon: "Shield",
    title: "Authentic Products",
    description: "100% genuine and verified items",
  },
  {
    id: 3,
    icon: "CreditCard",
    title: "Secure Checkout",
    description: "Safe and encrypted payments",
  },
  {
    id: 4,
    icon: "Package",
    title: "Fast Delivery",
    description: "Quick shipping to your doorstep",
  },
];

// Map icon string to component
const getIcon = (iconName: string) => {
  switch (iconName) {
    case "Truck":
      return <Truck className="w-8 h-8 text-orange-500" />;
    case "Shield":
      return <Shield className="w-8 h-8 text-orange-500" />;
    case "CreditCard":
      return <CreditCard className="w-8 h-8 text-orange-500" />;
    case "Package":
      return <Package className="w-8 h-8 text-orange-500" />;
    default:
      return <Truck className="w-8 h-8 text-orange-500" />;
  }
};

// Service layer
async function getInfoItems(): Promise<InfoItem[]> {
  return staticInfoItems;
}

export default function InformationContainer() {
  const [items, setItems] = useState<InfoItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getInfoItems().then((data) => {
      setItems(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <section className="bg-white py-16 w-full">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="text-center p-6 animate-pulse">
                <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-32 mx-auto mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-40 mx-auto"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-16 w-full">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-gray-200 shadow-[0_5px_15px_rgba(0,0,0,0.20)] p-6 text-center cursor-pointer transition-all duration-200 hover:border-orange-200 hover:shadow-[0_12px_35px_rgba(249,115,22,0.4),0_4px_10px_rgba(0,0,0,0.08)] group"
            >
              <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-100 transition-colors duration-200">
                {getIcon(item.icon)}
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-800 group-hover:text-orange-500 transition-colors duration-200">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-200">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
