import { Search } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/logo.png";

export default function HeaderMainComponents() {
	const [query, setQuery] = useState("");
	const navigate = useNavigate();
	const location = useLocation();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		if (!query.trim()) return;

		// If already on search page, just update URL (no reload navigation)
		if (location.pathname === "/search") {
			navigate(`/search?q=${encodeURIComponent(query)}`, {
				replace: true,
			});
			return;
		}

		// Navigate to search page
		navigate(`/search?q=${encodeURIComponent(query)}`);
	};

	return (
		<header className="w-full bg-white">
			<div className="flex items-center h-16 px-4 justify-between">

				{/* LOGO */}
				<Link to="/" className="shrink-0">
					<img src={logo} alt="Logo" className="h-14 w-auto cursor-pointer" />
				</Link>

				{/* RIGHT SIDE */}
				<div className="flex items-center gap-10">

					{/* SEARCH */}
					<form
						onSubmit={handleSubmit}
						className="flex items-center border border-gray-300 rounded-2xl px-3 py-2 focus-within:border-black"
					>
						<Search size={18} className="text-gray-600" />

						<input
							type="text"
							placeholder="Search products..."
							value={query}
							onChange={(e) => setQuery(e.target.value)}
							className="ml-2 outline-none w-80"
						/>
					</form>

					{/* About Us */}
					<Link
						to="/about"
						className="font-medium text-gray-800 hover:text-orange-500 transition-colors"
					>
						About Us
					</Link>

					{/* Login */}
					<Link
						to="/login"
						className="font-medium text-gray-800 hover:text-orange-500 transition-colors"
					>
						Login
					</Link>

				</div>

			</div>
		</header>
	);
}