"use client";
import { motion } from "framer-motion";
import { LuBrainCircuit } from "react-icons/lu";
import { IoCameraOutline, IoFileTrayFullOutline } from "react-icons/io5";
import { BsFileEarmarkBreakFill } from "react-icons/bs";

const HowItWork = () => {
  return (
    <div
      id="how-it-works"
      className="mt-[8rem] mb-[5rem] w-full px-6 md:px-12 lg:px-22 flex flex-col items-center justify-center"
    >
      <motion.h1
        initial={{ y: "100px" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-bold text-gray-700 mb-3 text-center"
      >
        How <span className="text-green-600">FarmLook</span> Works
      </motion.h1>
      <motion.p
        initial={{ y: "100px" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-lg md:text-xl font-medium text-center text-gray-500"
      >
        Advanced Ai technology made simple for field.
      </motion.p>
      <div className="w-full mt-[5rem] grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-6">
        {/* 01 */}
        <div className="w-full flex flex-col items-center justify-center p-5 rounded-xl border-1 border-green-200 bg-green-100">
          <div className="w-12 h-12 flex items-center justify-center bg-green-200 rounded-full border-1 border-green-400 mb-4">
            <IoCameraOutline className="text-green-700 text-[1.2rem]" />
          </div>
          <h2 className="text-xl text-gray-700 text-center font-semibold mb-3">
            Snap a Photo
          </h2>
          <p className="text-md md:text-lg font-medium text-gray-500 text-center">
            Simply point your camera at affected leaf, make sure it&apos;s
            clear.
          </p>
        </div>
        {/* 02 */}
        <div className="w-full flex flex-col items-center justify-center p-5 rounded-xl border-1 border-green-200 bg-green-100">
          <div className="w-12 h-12 flex items-center justify-center bg-green-200 rounded-full border-1 border-green-400 mb-4">
            <LuBrainCircuit className="text-green-700 text-[1.2rem]" />
          </div>
          <h2 className="text-xl text-gray-700 text-center font-semibold mb-3">
            Ai Analysis
          </h2>
          <p className="text-md md:text-lg font-medium text-gray-500 text-center">
            Our lightweight Ai processes the image instantly on your device.
          </p>
        </div>
        {/* 03 */}
        <div className="w-full flex flex-col items-center justify-center p-5 rounded-xl border-1 border-green-200 bg-green-100">
          <div className="w-12 h-12 flex items-center justify-center bg-green-200 rounded-full border-1 border-green-400 mb-4">
            <BsFileEarmarkBreakFill className="text-green-700 text-[1.2rem]" />
          </div>
          <h2 className="text-xl text-gray-700 text-center font-semibold mb-3">
            Get Report
          </h2>
          <p className="text-md md:text-lg font-medium text-gray-500 text-center">
            Receive diagnosis and treatment steps in Hausa or English instantly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
