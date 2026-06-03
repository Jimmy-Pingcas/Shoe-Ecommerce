import MainHeader from '../components/headerMainComponents';

export default function SearchResult() {
	return (
		<main className="min-h-screen fixed inset-0 bg-white overflow-auto">
      		<div className="w-full max-w-full flex flex-col gap-1 box-border">
				<section className="w-full bg-white text-[#111111] flex items-center justify-center px-6 py-2 box-border shadow-md">
					{/* import from components */}
					<MainHeader/>
				</section>

				{/* label and toggle  */}
				<section className="w-full bg-[#ebe1e1] flex items-start px-4 py-4 box-border">
					<h6>Search Result</h6>
					<p>Count: </p>
				</section>

				<section className="w-full bg-[#ebe1e1] flex items-start justify-center px-4 py-4 box-border">
					
					{/* search filter */}
					<div>

					</div>
					{/* search result */}
					<div>

					</div>
				</section>
			</div>
		</main>
	);
}
