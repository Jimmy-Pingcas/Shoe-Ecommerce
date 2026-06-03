import MainHeader from '../components/headerMainComponents';
import Filter from '../components/filter'

export default function SearchResult() {

	return (
		<main className="min-h-screen fixed inset-0 bg-white overflow-auto">
      		<div className="w-full max-w-full flex flex-col gap-1 box-border">
				<section className="w-full bg-white text-[#111111] flex items-center justify-center px-6 py-2 box-border shadow-md">
					{/* import from components */}
					<MainHeader/>
				</section>

				{/* label and toggle  */}
				<section className="w-full bg-[#ebe1e1] flex items-start px-4 py-1 box-border">
					<div className="w-full flex items-center justify-between">
					{/* LEFT SIDE */}
					<div className="flex flex-col ml-12">
						<div>Search Result</div>
						<div className="text-gray-500">Count</div>
					</div>

					{/* RIGHT SIDE (toggle placeholder) */}
					<div>
						{/* toggle button like grid/list */}
					</div>

					</div>
				</section>

				<section className="w-full bg-[#ebe1e1] flex gap-4 px-4 py-1">

					{/* Filter Sidebar */}
					<div className="w-1/5 shrink-0">
						<Filter />
					</div>

					{/* Products */}
					<div className="w-4/5 bg-white rounded-lg p-4 shadow-sm">
						Cards
					</div>

				</section>
			</div>
		</main>
	);
}
