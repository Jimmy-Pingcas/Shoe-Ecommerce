import MainHeader from '../components/headerMainComponents';
import Filter from '../components/filter'
import FilterButton from '../components/filterButton';

export default function SearchResult() {

	return (
		<main className="min-h-screen fixed inset-0 bg-white overflow-auto">
      		<div className="w-full max-w-full flex flex-col gap-1 box-border">
				<section className="w-full bg-white text-[#111111] flex items-center justify-center px-6 py-2 box-border shadow-md">
					{/* import from components */}
					<MainHeader/>
				</section>

				{/* label and toggle  */}
				<section className="w-full bg-white flex items-start px-4 py-1 box-border">
					<FilterButton />
				</section>

				<section className="w-full bg-white flex gap-4 px-4 mb-4">

					{/* Filter Sidebar */}
					<div className="w-1/5 shrink-0 bg-white rounded-lg p-4 shadow-[0_4px_12px_rgba(0,0,0,0.20)]">
						<Filter />
					</div> 

					{/* Products */}
					<div className="w-4/5 bg-white rounded-lg p-4 shadow-[0_4px_12px_rgba(0,0,0,0.20)]">
						Cards
					</div>

				</section>
			</div>
		</main>
	);
}
