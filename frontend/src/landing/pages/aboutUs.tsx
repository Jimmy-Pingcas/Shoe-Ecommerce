import MainHeader from '../components/headerMainComponents';

export default function AboutUs() {
	return (
		<main className="min-h-screen fixed inset-0 bg-white overflow-auto">
			<div className="w-full max-w-full flex flex-col gap-1 box-border">
				<section className="w-full bg-white text-[#111111] flex items-center justify-center px-6 py-2 box-border shadow-md">
					{/* import from components */}
					<MainHeader/>
				</section>
				
				<section>
					
				</section>

			</div>
		</main>
	);
}
