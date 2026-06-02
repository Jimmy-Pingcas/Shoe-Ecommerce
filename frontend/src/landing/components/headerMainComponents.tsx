import { User } from "lucide-react";

export default function HeaderMainComponents() {
	return (
		<header className="w-full border-b bg-white shadow-sm">
			<div className="grid h-16 grid-cols-3 items-center px-6">
				{/* Logo */}
				<div>
					<h1 className="text-2xl font-bold">LOG</h1>
				</div>

				{/* Search */}
				<div className="flex justify-center">
					<input
						type="text"
						placeholder="Search products..."
						className="w-full max-w-md rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-black"
					/>
				</div>

				{/* Right Side */}
				<div className="flex items-center justify-end gap-4">
					<button className="font-medium hover:text-gray-600">
						About Us
					</button>

					<button className="rounded-full p-2 hover:bg-gray-100">
						<User size={24} />
					</button>
				</div>
			</div>
		</header>
	);
}