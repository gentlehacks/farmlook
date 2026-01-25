"use clinet";
import {motion} from "framer-motion"
import { FaLocationDot } from "react-icons/fa6";

const Target = () => {
  return (
    <div className="w-full my-[5rem] px-6 md:px-12 flex flex-col items-center justify-center">
      <motion.h1 
        initial={{ y: "100px" }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.8 }}
      className="font-semibold text-2xl md:text-3xl text-gray-700">
        Serving Every <span className="text-green-600">Farmer</span>
      </motion.h1>
      <div className="w-full mt-[5rem] grid grid-cols-1 md:grid-cols-2 gap-6 md:px-22 lg:px-12">
        {/* 01 */}
        <div className="w-full bg-white border-1 border-gray-200 p-5 rounded-2xl flex flex-col items-center justify-center">
          <div className="w-15 h-15 flex items-center justify-center bg-green-200 border-1 border-green-300 rounded-full mb-3">
            <FaLocationDot className="text-xl text-blue-600" />
          </div>
          <h2 className="font-semibold text-xl text-gray-700 mb-1">
            Nothern Farmer
          </h2>
          <h3 className="text-md font-medium text-gray-500 mb-4">
            Musa, Niger state
          </h3>
          <p className="text-md text-center w-full font-medium text-gray-500">
            Musa primarily speaks Hausa and has a Android device. He uses{" "}
            <span className="font-semibold">FarmLook&apos;</span> Ai with{" "}
            <span className="font-semibold">Hausa</span> Interface to check his
            tomato crops weekly.
          </p>
        </div>
        {/* 02 */}
        <div className="w-full bg-white border-1 border-gray-200 p-5 rounded-2xl flex flex-col items-center justify-center">
          <div className="w-15 h-15 flex items-center justify-center bg-green-200 border-1 border-green-300 rounded-full mb-3">
            <FaLocationDot className="text-xl text-green-600" />
          </div>
          <h2 className="font-semibold text-xl text-gray-700 mb-1">
            Southern Farmer
          </h2>
          <h3 className="text-md font-medium text-gray-500 mb-4">
            Chidinma, Oyo state
          </h3>
          <p className="text-md text-center w-full font-medium text-gray-500">
            Chidinma manages a large Cassava cooperation. She uses <span className="font-semibold">FarmLook</span> in 
            <span className="font-semibold"> English</span> to quickly scan large areas and generate report to share
            with their cooperative members.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Target;
