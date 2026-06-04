import type {Shoe} from "../types/shoe";

export default function ShoeCard({ shoe }: { shoe: Shoe }) {
	return (
		<div className="group w-56 bg-white rounded-xl overflow-hidden shadow-md border border-transparent cursor-pointer transition-all duration-200 hover:border-orange-200 hover:shadow-[0_8px_25px_rgba(249,115,22,0.25)]">

			{/* Image */}
			<div className="bg-gray-100 h-40 p-3 overflow-hidden">
                <img
                    src={shoe.image}
                    alt={shoe.name}
                    className="w-full h-full object-cover"
                />
            </div>

			{/* Content */}
			<div className="p-3">
				<h2 className="text-sm font-semibold text-gray-800 truncate">
					{shoe.name}
				</h2>

				<p className="text-xs text-gray-500">
					{shoe.category}
				</p>

				{/* Rating */}
				<div className="flex items-center gap-1 mt-1">
					<span className="text-yellow-500 text-xs">★★★★★</span>
					<span className="text-xs text-gray-500">
						({shoe.rating})
					</span>
				</div>

				{/* Price */}
				<div className="mt-2">
					<p className="text-lg font-bold text-orange-500">
						₱{shoe.price}
					</p>
					<p className="text-xs text-gray-400 line-through">
						₱{shoe.oldPrice}
					</p>
				</div>

				{/* Add to Cart Button */}
				<button className="w-full mt-3 bg-orange-500 text-white text-sm font-medium py-2 rounded-lg transition-colors duration-200 hover:bg-orange-600">
					Add to Cart
				</button>
			</div>
		</div>
	);
}