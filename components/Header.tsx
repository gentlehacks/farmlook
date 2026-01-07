"use client";
import Image from "next/image";
import Link from "next/link";
import { FaXmark } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";
import { RiMenu4Fill } from "react-icons/ri";

const Header = ({
  showMobileNav,
  setShowMobileNav,
}: {
  showMobileNav: boolean;
  setShowMobileNav: (showMobileNav: boolean) => void;
}) => {
  return (
    <div className="w-full fixed top-0 z-100 left-0 flex flex-row items-center px-6 py-3 bg-green-600/30 backdrop-filter backdrop-blur-md">
      <ul className="flex items-center justify-between w-full">
        <div>
          <Image
            src="/brand-logo.png"
            alt="website header logo"
            width={300}
            height={300}
            priority
            className="w-[8rem] md:w-[10rem]"
          />
        </div>
        {/* Large screen only */}
        <ul className="items-center gap-6 hidden md:flex">
          <Link
            href="#"
            className="font-medium text-gray-700 hover:text-green-400 transition-all duration-200"
          >
            Home
          </Link>
          <Link
            href="#how-it-works"
            className="font-medium text-gray-700 hover:text-green-400 transition-all duration-200"
          >
            How it works
          </Link>
          <Link
            href="#features"
            className="font-medium text-gray-700 hover:text-green-400 transition-all duration-200"
          >
            Features
          </Link>
          <Link
            href="#faq"
            className="font-medium text-gray-700 hover:text-green-400 transition-all duration-200"
          >
            FAQ
          </Link>
        </ul>
        <button
          onClick={() => setShowMobileNav(!showMobileNav)}
          className="md:hidden p-2 bg-green-200 border-1 border-green-300 rounded-md cursor-pointer"
        >
          {showMobileNav ? (
            <FaXmark className="text-green-600 text-xl" />
          ) : (
            <RiMenu4Fill className="text-green-600 text-xl" />
          )}
        </button>
        <Link href="/download" className="hidden md:flex px-6 py-3 items-center justify-center rounded-full font-medium bg-green-600 hover:bg-green-700 text-white transition-all duration-200">
          <FiDownload className="mr-2" />
          Get the App
        </Link>
      </ul>
    </div>
  );
};

export default Header;
