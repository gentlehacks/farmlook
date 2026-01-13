"use client";
import { motion } from "framer-motion";
import { BiSolidCloudUpload } from "react-icons/bi";
import { TbWorld } from "react-icons/tb";
import { RiPlantFill } from "react-icons/ri";
import { FaKitMedical } from "react-icons/fa6";

const FeaturesSection = () => {
  return (
    <div
      id="features"
      className="w-full mt-[8rem] px-6 md:px-12 flex flex-col items-center justify-center"
    >
      <motion.h1
        initial={{ y: "100px" }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-2xl md:text-3xl font-semibold text-center text-gray-700"
      >
        Built For <span className="text-green-600">The Field</span> 
      </motion.h1>
      <motion.p 
        initial={{ y: "100px" }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.8 }}
      className="text-lg md:text-xl text-center font-medium text-gray-500 mt-2 md:w-[60%]">
        FarmLook makes farming easier than before, by making analyzing crops diseases faster ⚡.
      </motion.p>
      <div className="w-full mt-[5rem] grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 01 */}
        <div className="flex flex-col p-5 rounded-xl bg-green-50 border-1 border-green-200">
          <div className="w-12 h-12 rounded-md bg-green-100 border-1 border-green-200 flex items-center justify-center mb-4">
            <TbWorld className="text-green-600 text-[1.5rem]" />
          </div>
          <h2 className="mb-3 font-semibold text-gray-700 text-xl">
            Hausa Language First
          </h2>
          <p className="text-sm md:text-md font-medium text-gray-500">
            Design with localization at it&apos;s core. Switch seamlessly
            between English and Hausa for maximum acessibility.
          </p>
        </div>
        {/* 02 */}
        <div className="flex flex-col p-5 rounded-xl bg-green-50 border-1 border-green-200">
          <div className="w-12 h-12 rounded-md bg-green-100 border-1 border-green-200 flex items-center justify-center mb-4">
            <BiSolidCloudUpload className="text-green-600 text-[1.5rem]" />
          </div>
          <h2 className="mb-3 font-semibold text-gray-700 text-xl">
            Image Upload
          </h2>
          <p className="text-sm md:text-md font-medium text-gray-500">
            No mobile data? No problem. FarmLook let you upload crop image
            directly from your phone. Good for snap now, analyze later.
          </p>
        </div>
        {/* 03 */}
        <div className="flex flex-col p-5 rounded-xl bg-green-50 border-1 border-green-200">
          <div className="w-12 h-12 rounded-md bg-green-100 border-1 border-green-200 flex items-center justify-center mb-4">
            <RiPlantFill className="text-green-600 text-[1.5rem]" />
          </div>
          <h2 className="mb-3 font-semibold text-gray-700 text-xl">
            10+ Crop Library
          </h2>
          <p className="text-sm md:text-md font-medium text-gray-500">
            Expansive database covering staple Nigerian crops including Maize,
            Tomato, Beans and more...
          </p>
        </div>
        {/* 04 */}
        <div className="flex flex-col p-5 rounded-xl bg-green-50 border-1 border-green-200">
          <div className="w-12 h-12 rounded-md bg-green-100 border-1 border-green-200 flex items-center justify-center mb-4">
            <FaKitMedical className="text-green-600 text-[1.5rem]" />
          </div>
          <h2 className="mb-3 font-semibold text-gray-700 text-xl">
            Actionable Treatment Plans
          </h2>
          <p className="text-sm md:text-md font-medium text-gray-500">
            Don&apos;t just know the problem, fit it. Get step-by-step cure
            instructions using locally available resources.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
