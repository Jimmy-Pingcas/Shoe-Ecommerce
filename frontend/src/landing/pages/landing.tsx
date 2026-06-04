import MainHeader from "../components/headerMainComponents";
import Carousel from "../components/carousel";
import ShoeCard from "../components/shoeCard";
import shoes from "../../aaSampleData/shoe.json";
import Brand from "../components/brand";
import InformationContainer from "../components/informationContainer";
import Filter from "../components/filterButton";
import Footer from "../components/footer";

export default function Landing() {
  return (
    <main className="min-h-screen fixed inset-0 bg-white overflow-auto">
      <div className="w-full max-w-full flex flex-col gap-1 box-border">
        {/* Header (navigation) */}
        <section className="w-full bg-white text-[#111111] flex items-center justify-center px-6 py-2 box-border shadow-md">
          {/* import from components */}
          <MainHeader />
        </section>

        {/* Main content area */}
        <section className="w-full bg-white flex items-start justify-center px-4 py-4 box-border">
          <div className="w-full p-6 box-border flex flex-col gap-8 items-center">
            {/* Carousel component - file: components/carousel.tsx */}
            <div className="w-full flex flex-col items-center gap-8">
              {/* import ang component diri */}
              <Carousel />
              <h1 className="m-0 text-4xl md:text-5xl lg:text-6xl font-extrabold"></h1>
            </div>

            <div className="w-full flex justify-center">
              <div className="w-full max-w-6xl flex flex-col gap-4">
                {/* Filter on top */}
                <Filter />

                {/* Grid below */}
                <div className="grid grid-cols-[repeat(auto-fit,_14rem)] justify-center gap-4">
                  {shoes.slice(0, 8).map((shoe) => (
                    <ShoeCard key={shoe.id} shoe={shoe} />
                  ))}
                </div>
              </div>
            </div>

            {/* Brands available list component - file: components/brand.tsx */}
            <div className="w-full flex flex-col items-center gap-8">
              {/* import ang component diri */}
              <Brand />
              <h1 className="m-0 text-4xl md:text-5xl lg:text-6xl font-extrabold"></h1>
            </div>

            {/* Site information component - file: components/informationContainer.tsx */}
            <div className="w-full flex flex-col items-center gap-8">
              {/* import ang component diri */}
              <InformationContainer />
              <h1 className="m-0 text-4xl md:text-5xl lg:text-6xl font-extrabold"></h1>
            </div>
          </div>
        </section>

        {/* Footer */}
        <section className="w-full bg-[#ebe1e1] text-[#111111] box-border">
          <Footer />
        </section>
      </div>
    </main>
  );
}
