"use client";
import { motion } from "framer-motion";
import { FaXmark } from "react-icons/fa6";
import { useRouter } from "next/navigation";

const MobileNav = ({
  showMobileNav,
  setShowMobileNav,
}: {
  showMobileNav: boolean;
  setShowMobileNav: (showMobileNav: boolean) => void;
}) => {
  const router = useRouter();
  const handleNavigate = (link: string) => {
    router.push(`/#${link}`);
    setShowMobileNav(false);
  };
  return (
    <div
      onClick={() => setShowMobileNav(!showMobileNav)}
      className="fixed top-0 right-0 w-full min-h-full bg-[rgba(0,0,0,0.4)]"
    >
      <motion.div
        onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-white w-[80%] min-h-screen flex flex-col p-6"
      >
        <div className="flex flex-col items-center justify-center mt-[8rem]">
          <div
            onClick={() => handleNavigate("")}
            className="font-medium text-green-900 hover:text-green-600 text-md transition-all duration-100 border-2 border-green-300 w-full text-center mb-8 bg-gray-100 p-3 rounded-full cursor-pointer"
          >
            Home
          </div>
          <div
            onClick={() => handleNavigate("how-it-works")}
            className="font-medium text-green-900 hover:text-green-600 text-md transition-all duration-100 border-2 border-green-300 w-full text-center mb-8 bg-gray-100 p-3 rounded-full cursor-pointer"
          >
            How it works
          </div>
          <div
            onClick={() => handleNavigate("features")}
            className="font-medium text-green-900 hover:text-green-600 text-md transition-all duration-100 border-2 border-green-300 w-full text-center mb-8 bg-gray-100 p-3 rounded-full cursor-pointer"
          >
            Features
          </div>
          <div
            onClick={() => handleNavigate("faq")}
            className="font-medium text-green-900 hover:text-green-600 text-md transition-all duration-100 border-2 border-green-300 w-full text-center mb-8 bg-gray-100 p-3 rounded-full cursor-pointer"
          >
            FAQ
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MobileNav;
