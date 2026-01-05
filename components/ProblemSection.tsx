"use client";
import { PiChartLineDownBold } from "react-icons/pi";
import { TbClockHour5Filled } from "react-icons/tb";
import { IoLanguage } from "react-icons/io5";

const ProblemSection = () => {
  return (
    <div className="w-full mt-[8rem] mb-[5rem] px-6 md:px-10 flex flex-col items-center justify-center ">
      <h1 className="text-3xl md:text-4xl text-center text-gray-700 font-bold">
        The Silent Killer Of{" "}
        <span className="text-green-600"> Nigerian Harvests</span>
      </h1>
      <p className="text-gray-500 mt-4 text-center text-md md:text-lg font-medium md:px-[25%]">
        Farmers are losing 40% of their annual harvests to preventable diseases
        due to late diagnosis and lack expert access.
      </p>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-[5rem]">
        {/* 01 */}
        <div className="flex flex-col items-center justify-center p-5 bg-red-50 rounded-2xl border-1 border-red-100 ">
          <div className="w-12 h-12 bg-red-100 flex items-center justify-center rounded-lg mb-4 border-1 border-red-200">
            <PiChartLineDownBold className="text-red-500 text-[1.5rem]" />
          </div>
          <h2 className="text-gray-700 text-lg md:text-xl font-semibold mb-3">
            40% Anual Loss
          </h2>
          <p className="text-md md:text-lg font-medium text-gray-500 text-center">
            The toatal harvest lost to undetected diseases
          </p>
        </div>
        {/* 02 */}
        <div className="flex flex-col items-center justify-center p-5 bg-red-50 rounded-2xl border-1 border-red-100 ">
          <div className="w-12 h-12 bg-red-100 flex items-center justify-center rounded-lg mb-4 border-1 border-red-200">
            <TbClockHour5Filled className="text-red-500 text-[1.5rem]" />
          </div>
          <h2 className="text-gray-700 text-lg md:text-xl font-semibold mb-3">
            Late Diagnosis
          </h2>
          <p className="text-md md:text-lg font-medium text-gray-500 text-center">
            Average 2 two weeks delay in identifying diseases
          </p>
        </div>
        {/* 03 */}
        <div className="flex flex-col items-center justify-center p-5 bg-red-50 rounded-2xl border-1 border-red-100 ">
          <div className="w-12 h-12 bg-red-100 flex items-center justify-center rounded-lg mb-4 border-1 border-red-200">
            <IoLanguage className="text-red-500 text-[1.5rem]" />
          </div>
          <h2 className="text-gray-700 text-lg md:text-xl font-semibold mb-3">
            Language Barrier
          </h2>
          <p className="text-md md:text-lg font-medium text-gray-500 text-center">
            Most diagnosos tools are not available for local languages
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProblemSection;
