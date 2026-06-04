import { BrowserRouter, Routes, Route } from "react-router-dom";

// Landing pages
import Landing from "./landing/pages/landing";
import AboutUs from "./landing/pages/aboutUs";
import SearchResult from "./landing/pages/searchResult";
import NotFound from "./landing/pages/notFound";

// Client pages
import Home from "./client/pages/home";
import Cart from "./client/pages/cart";
import Checkout from "./client/pages/checkout";
import OrderConfirmation from "./client/pages/orderConfirmation";
import OrderHistory from "./client/pages/orderHistory";
import ProductDetails from "./client/pages/productDetails";
import ProductListing from "./client/pages/productListing";
import UserAccount from "./client/pages/userAccount";

// Auth pages
import Login from "./auth/pages/login";
import Register from "./auth/pages/register";
import ForgotPassword from "./auth/pages/forgotPassoword";
import NewPassword from "./auth/pages/newPassword";
import AdminLogin from "./auth/pages/adminLogin";

// Admin pages
import AdminDashboard from "./admin/pages/adminDashboard";
import ProductManagement from "./admin/pages/productManagement";
import CategoryManagement from "./admin/pages/categoryManagement";
import OrderManagement from "./admin/pages/orderManagement";
import ReviewManagement from "./admin/pages/reviewManagement";
import SalesManagement from "./admin/pages/salesManagement";
import Settings from "./admin/pages/Settings";
import UserManagement from "./admin/pages/userManagement";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing */}
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/search" element={<SearchResult />} />

        {/* Client */}
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
        <Route path="/order-history" element={<OrderHistory />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/account" element={<UserAccount />} />

        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<NewPassword />} />
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* Admin */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/products" element={<ProductManagement />} />
        <Route path="/admin/categories" element={<CategoryManagement />} />
        <Route path="/admin/orders" element={<OrderManagement />} />
        <Route path="/admin/reviews" element={<ReviewManagement />} />
        <Route path="/admin/sales" element={<SalesManagement />} />
        <Route path="/admin/settings" element={<Settings />} />
        <Route path="/admin/users" element={<UserManagement />} />

        {/* Not found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
