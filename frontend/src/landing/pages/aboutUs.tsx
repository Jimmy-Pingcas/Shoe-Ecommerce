"use client";

import { Target, Eye } from "lucide-react";
import Footer from "../components/footer";
import Header from "../components/headerMainComponents";

export default function AboutPage() {
  return (
    <main>
      <Header />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#F97316] to-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">About Wandrian</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Your trusted destination for authentic shoes and premium footwear
            since 2026
          </p>
        </div>
      </section>

      {/* Company/Store Information & Background */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <div className="w-20 h-1 bg-[#F97316] mb-6"></div>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Founded in 2026, Wandrian started with a simple mission: to
              provide shoe enthusiasts with access to authentic, high-quality
              footwear from the world's best brands.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              What began as a small online store has grown into a trusted
              marketplace serving thousands of customers across the Philippines.
              We pride ourselves on offering only genuine products, competitive
              prices, and exceptional customer service.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, Wandrian continues to expand its collection while
              maintaining the same commitment to authenticity and customer
              satisfaction that defined us from day one.
            </p>
          </div>
          <div className="bg-gray-100 rounded-xl border border-gray-200 shadow-[0_5px_15px_rgba(0,0,0,0.20)] overflow-hidden">
            <img
              src="/images/carousel/shoes-1.jpg"
              alt="Shoe store"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Mission */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-[0_5px_15px_rgba(0,0,0,0.20)] p-8 text-center transition-all duration-200 hover:border-orange-200 hover:shadow-[0_12px_35px_rgba(249,115,22,0.4),0_4px_10px_rgba(0,0,0,0.08)]">
              <div className="w-16 h-16 bg-[#F97316] rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                Our Mission
              </h2>
              <p className="text-gray-600">
                To provide authentic, high-quality footwear that combines style
                and comfort, making premium sneakers accessible to everyone at
                fair prices.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-[0_5px_15px_rgba(0,0,0,0.20)] p-8 text-center transition-all duration-200 hover:border-orange-200 hover:shadow-[0_12px_35px_rgba(249,115,22,0.4),0_4px_10px_rgba(0,0,0,0.08)]">
              <div className="w-16 h-16 bg-[#F97316] rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                Our Vision
              </h2>
              <p className="text-gray-600">
                To become the most trusted footwear destination in the
                Philippines, known for authenticity, quality, and exceptional
                customer service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Details */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
          Contact Us
        </h2>
        <div className="w-20 h-1 bg-[#F97316] mx-auto mb-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl border border-gray-200 shadow-[0_5px_15px_rgba(0,0,0,0.20)] p-6 text-center transition-all duration-200 hover:border-orange-200 hover:shadow-[0_12px_35px_rgba(249,115,22,0.4),0_4px_10px_rgba(0,0,0,0.08)]">
            <div className="text-4xl mb-3">📍</div>
            <h3 className="font-semibold text-gray-800 text-lg mb-2">
              Address
            </h3>
            <p className="text-gray-600">123 Street, Yalabyalam, Philippines</p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 shadow-[0_5px_15px_rgba(0,0,0,0.20)] p-6 text-center transition-all duration-200 hover:border-orange-200 hover:shadow-[0_12px_35px_rgba(249,115,22,0.4),0_4px_10px_rgba(0,0,0,0.08)]">
            <div className="text-4xl mb-3">📞</div>
            <h3 className="font-semibold text-gray-800 text-lg mb-2">Phone</h3>
            <p className="text-gray-600">+63 (2) 8123 4567</p>
            <p className="text-gray-600">+63 912 345 6789</p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 shadow-[0_5px_15px_rgba(0,0,0,0.20)] p-6 text-center transition-all duration-200 hover:border-orange-200 hover:shadow-[0_12px_35px_rgba(249,115,22,0.4),0_4px_10px_rgba(0,0,0,0.08)]">
            <div className="text-4xl mb-3">✉️</div>
            <h3 className="font-semibold text-gray-800 text-lg mb-2">Email</h3>
            <p className="text-gray-600">hello@wandrian.com</p>
            <p className="text-gray-600">support@wandrian.com</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
