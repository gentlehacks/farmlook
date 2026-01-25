"use client"
import {motion} from "framer-motion"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiDownload } from "react-icons/fi";

const HeroSection = () => {
  const APK_URL = "https://expo.dev/artifacts/eas/pEFJDnhXdzCHVJtArLv3mF.apk";
  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
    setDownloading(true);

    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = APK_URL;
    link.download = 'FarmLook.apk';
    link.target = '_blank';

    // Trigger download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Reset button state after delay
    setTimeout(() => {
      setDownloading(false);
    }, 2000);
  };

  return (
    <div className="mt-[10rem] md:mt-[5rem] w-full px-6 md:px-12 flex flex-col md:flex-row justify-center">
      <div className="w-full flex flex-col items-center justify-center">
        <motion.div 
          initial={{ scale: "0.4", opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        className="px-2 py-1 rounded-full bg-green-100 border-1 border-green-200 mb-4">
          <p className="text-gray-500 text-sm md:text-md ">
            Agronomist in farmer&apos;s pocket 🌱
          </p>
        </motion.div>
        <motion.h1 
          initial={{ y: "100px", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl md:text-5xl text-center font-bold text-gray-700">
          Your Ai <span className="text-green-600">Crop Doctor</span>
        </motion.h1>
        <motion.p 
          initial={{ y: "100px", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        className="mt-6 text-md md:text-lg font-medium text-gray-600 text-center px-6">
          Instantly detect crop diseases fast. Join 500+ farmers protecting
          their harvest with a single snap.
        </motion.p>
        <div className="flex items-center mt-[5rem]">
          <motion.button
            onClick={handleDownload}
            disabled={downloading}
            initial={{ y: "100px", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}

            className={`px-6 py-3 rounded-full text-white font-medium flex items-center justify-center bg-green-600 hover:bg-green-700 hover:mt-[-3px] shadow-md shadow-green-500 transition-all duration-200
            ${downloading ? "opacity-50 cursor-not-allowed" : ""}
          `}>
            <FiDownload className="mr-2" />
            {downloading ? "Downloading..." : "Get the App"}
          </motion.button>
        </div>
      </div>
      <div className="w-full flex items-center justify-center mt-[5rem]">
        <motion.div 
          initial={{ scale: "0.8", x: "100px", opacity: 0 }}
          whileInView={{ scale: 1, x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        className="w-full max-w-[25rem] p-5 bg-green-300 rounded-xl flex flex-col items-center justify-center">
          <Image
            src="/hero-image.png"
            alt="Hero Image"
            width={300}
            height={300}
            priority
            className="rounded-lg w-full"
          />
          <p className="mt-3 text-gray-600 font-medium text-md w-full text-center">
            Farmers are using a smartphone to scan their crops 🌱
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
