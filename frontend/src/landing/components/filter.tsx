export default function Filter() {
	return (
		<div className="w-auto rounded-lg bg-white p-3 shadow-sm text-sm">
			<h2 className="mb-4 text-base font-semibold">Filters</h2>

			{/* Brand */}
			<div className="mb-4">
				<h3 className="mb-2 text-sm font-medium">Brand</h3>

				<div className="space-y-1">
					<label className="flex items-center gap-2">
						<input type="checkbox" className="h-3.5 w-3.5" />
						<span>Nike</span>
					</label>

					<label className="flex items-center gap-2">
						<input type="checkbox" className="h-3.5 w-3.5" />
						<span>Adidas</span>
					</label>

					<label className="flex items-center gap-2">
						<input type="checkbox" className="h-3.5 w-3.5" />
						<span>Puma</span>
					</label>

					<label className="flex items-center gap-2">
						<input type="checkbox" className="h-3.5 w-3.5" />
						<span>New Balance</span>
					</label>
				</div>
			</div>

			{/* Category */}
			<div className="mb-4">
				<h3 className="mb-2 text-sm font-medium">Category</h3>

				<div className="space-y-1">
					<label className="flex items-center gap-2">
						<input type="checkbox" className="h-3.5 w-3.5" />
						<span>Running</span>
					</label>

					<label className="flex items-center gap-2">
						<input type="checkbox" className="h-3.5 w-3.5" />
						<span>Basketball</span>
					</label>

					<label className="flex items-center gap-2">
						<input type="checkbox" className="h-3.5 w-3.5" />
						<span>Casual</span>
					</label>

					<label className="flex items-center gap-2">
						<input type="checkbox" className="h-3.5 w-3.5" />
						<span>Training</span>
					</label>
				</div>
			</div>

			{/* Price Range */}
            <div className="mb-4">
                <h3 className="mb-2 text-sm font-medium">Price Range</h3>

                <div className="flex items-center gap-1">
                    <div className="relative w-full">
                        <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500 text-xs">
                            ₱
                        </span>
                        <input
                            type="number"
                            placeholder="Min"
                            className="w-full rounded border pl-5 pr-2 py-1 text-xs"
                        />
                    </div>

                    <span className="text-gray-400">-</span>

                    <div className="relative w-full">
                        <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500 text-xs">
                            ₱
                        </span>
                        <input
                            type="number"
                            placeholder="Max"
                            className="w-full rounded border pl-5 pr-2 py-1 text-xs"
                        />
                    </div>
                </div>
            </div>

			{/* Rating */}
			<div className="mb-4">
				<h3 className="mb-2 text-sm font-medium">Rating</h3>

				<div className="space-y-1">
                    <label className="flex items-center gap-2">
                        <input type="checkbox" className="h-3.5 w-3.5" />
                        <span className="text-yellow-400">★★★★★</span>
                    </label>

                    <label className="flex items-center gap-2">
                        <input type="checkbox" className="h-3.5 w-3.5" />
                        <span className="text-yellow-400">★★★★</span>
                    </label>

                    <label className="flex items-center gap-2">
                        <input type="checkbox" className="h-3.5 w-3.5" />
                        <span className="text-yellow-400">★★★</span>
                    </label>

                    <label className="flex items-center gap-2">
                        <input type="checkbox" className="h-3.5 w-3.5" />
                        <span className="text-yellow-400">★★</span>
                    </label>
                    <label className="flex items-center gap-2">
                        <input type="checkbox" className="h-3.5 w-3.5" />
                        <span className="text-yellow-400">★</span>
                    </label>
                </div>
			</div>

			{/* Buttons */}
			<div className="flex gap-2">
				<button className="flex-1 rounded bg-orange-500 py-1.5 text-xs font-medium text-white hover:bg-orange-600">
					Apply
				</button>

				<button className="flex-1 rounded border py-1.5 text-xs font-medium hover:bg-gray-50">
					Reset
				</button>
			</div>
		</div>
	);
}