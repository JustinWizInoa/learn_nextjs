import Image from "next/image";
import About from "./components/Home/About";

export default function Home() {
  return (
    <div>
      <div className="flex flex-wrap pt-40 font-poppins px-16 py-12">
        <div className="w-full lg:w-1/2">
          <div>
            <button className="text-[#0066ff] rounded-full p-2 bg-[#d9e8ff] font-semibold">
              DESIGN AGENCY
            </button>
          </div>
          <h1 className="text-4xl lg:text-7xl font-semibold text-darkpurple mt-4">
            <span className="block mb-4">Dedicated to</span>
            <span className="block mb-4">bring your</span>
            <span className="block">ideas to life.</span>
          </h1>
          <div className="mt-6">
            <button className="bg-blue-600 rounded-full p-2 font-normal text-[#ffffff] px-12 py-5">
              Get Started
            </button>
          </div>
        </div>

        <div className="lg:-m-24 lg:pt-20 hidden lg:block">
          <img
            src="https://themewagon.github.io/Desgy/images/banner/banner.svg"
            alt="Banner"
            className="w-full h-auto"
          />
        </div>
      </div>
      <hr />
      <About />
    </div>
  );
}
