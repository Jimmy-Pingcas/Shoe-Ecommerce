"use client";

import { useState, useEffect } from "react";
import { Truck, Shield, CreditCard, Package } from "lucide-react";

interface InfoItem {
  id: number;
  icon: string; // Store icon name as string
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
      return <Truck className="w-8 h-8 text-white" />;
    case "Shield":
      return <Shield className="w-8 h-8 text-white" />;
    case "CreditCard":
      return <CreditCard className="w-8 h-8 text-white" />;
    case "Package":
      return <Package className="w-8 h-8 text-white" />;
    default:
      return <Truck className="w-8 h-8 text-white" />;
  }
};

// Service layer
async function getInfoItems(): Promise<InfoItem[]> {
  return staticInfoItems;
  // Future: fetch from API
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
              className="text-center p-6 hover:shadow-lg transition-shadow rounded-lg cursor-pointer"
            >
              <div className="w-16 h-16 bg-[#F97316] rounded-full flex items-center justify-center mx-auto mb-4">
                {getIcon(item.icon)}
              </div>
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
