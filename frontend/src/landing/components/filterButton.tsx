import { useState } from "react";

export default function FilterButton() {
	const [active, setActive] = useState("All");

	const filters = [
		"All",
		"Men",
		"Women",
		"Kids",
		"Sports",
		"New Collection",
		"Popular",
	];

	return (
		<div className="w-full bg-white px-4 box-border">

			<div className="flex w-full items-center">

				{/* LEFT (20%) */}
				<div className="w-1/5 flex flex-col">
					<div className="pl-4 text-m font-medium">Search Result</div>
					<div className="pl-4 text-gray-500 text-sm">Count</div>
				</div>

				{/* MIDDLE (65%) */}
				<div className="w-3/5 flex justify-center">
					<div className="flex flex-wrap gap-4">

						{filters.map((item) => {
							const isActive = active === item;

							return (
								<button
									key={item}
									onClick={() => setActive(item)}
									className={`px-3 py-1 rounded-full text-sm border transition-all duration-200
										${isActive
											? "bg-orange-500 text-white border-orange-500"
											: "bg-white text-gray-700 border-gray-300 hover:border-orange-400"
										}`}
								>
									{item}
								</button>
							);
						})}

					</div>
				</div>

				{/* RIGHT (15%) */}
				<div className="w-1/5 flex justify-end gap-2">

					<button className="px-3 py-1 border rounded text-sm hover:bg-gray-100">
						Grid
					</button>

					<button className="px-3 py-1 border rounded text-sm hover:bg-gray-100">
						List
					</button>

				</div>

			</div>
		</div>
	);
}