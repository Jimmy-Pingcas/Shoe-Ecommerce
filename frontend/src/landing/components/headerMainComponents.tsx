import { Search} from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function HeaderMainComponents() {
	return (
		<header className="w-full bg-white">
			<div className="flex items-center h-16 px-4 justify-between">

				{/* LOGO (LEFT) */}
				<Link to="/" className="shrink-0">
					<img src={logo} alt="Logo" className="h-14 w-auto cursor-pointer" />
				</Link>

				{/* RIGHT SIDE */}
				<div className="flex items-center gap-10">

					{/* Search */}
					<div className="flex items-center border border-gray-300 rounded-2xl px-3 py-2 focus-within:border-black">
						<Search size={18} className="text-gray-600" />
						<input
							type="text"
							placeholder="Search products..."
							className="ml-2 outline-none w-80"
						/>
					</div>

					{/* About Us */}
					<Link
						to="/about"
						className="font-medium text-gray-800 hover:text-orange-500 transition-colors"
					>
						About Us
					</Link>

					<Link
						to="/about"
						className="font-medium text-gray-800 hover:text-orange-500 transition-colors"
					>
						Login
					</Link>

				</div>

			</div>
		</header>
	);
}