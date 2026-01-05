"use client"
import Image from "next/image";

const HeroSection = () => {

  return (
    <div className="mt-[10rem] md:mt-[5rem] w-full px-6 md:px-12 flex flex-col md:flex-row justify-center">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="px-2 py-1 rounded-full bg-green-100 border-1 border-green-200 mb-4">
          <p className="text-gray-500 text-sm md:text-md ">
            Agronomist in farmer&apos;s pocket 🌱
          </p>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-center font-bold text-gray-700">
          Your Ai <span className="text-green-600">Crop Doctor</span>
        </h1>
        <p className="mt-6 text-md md:text-lg font-medium text-gray-600 text-center px-6">
          Instantly detect crop diseases fast. Join 500+ farmers protecting
          their harvest with a single snap.
        </p>
        <div className="flex items-center mt-[5rem]">
          <button className="px-6 py-3 rounded-full text-white font-medium flex items-center justify-center bg-green-600 hover:bg-green-700 hover:mt-[-3px] shadow-md shadow-green-500 transition-all duration-200">
            Download the App
          </button>
        </div>
      </div>
      <div className="w-full flex items-center justify-center mt-[5rem]">
        <div className="w-full max-w-[25rem] p-5 bg-green-300 rounded-xl flex flex-col items-center justify-center">
          <Image
            src="/hero-image.png"
            alt="Hero Image"
            width={300}
            height={300}
            priority
            className="rounded-lg w-full"
          />
          <p className="mt-3 text-gray-600 font-medium text-md w-full text-center">
            Farmers using a smartphone to scan crop leaf 🌱
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
