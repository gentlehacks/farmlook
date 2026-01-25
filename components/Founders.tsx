"use client"
import { motion } from 'framer-motion';
import Image from 'next/image'

const Founders = () => {
  return (
    <section id="founder" className="w-full mt-[5rem] flex flex-col items-center justify-center px-6">
      <div className="flex items-center gap-4 mb-2">
        {/* Gentleman */}
        <motion.div 
          initial={{ scale: "0.8", x: "100px", opacity: 0 }}
          whileInView={{ scale: 1, x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        id="founder" title="Salihu Adamu" className="w-15 h-15 bg-green-200 border-1 border-green-300 rounded-full overflow-hidden">
          <Image
            src="/salihu.png"
            alt="salihu adamu founder farmlook"
            width={200}
            height={200}
            priority
            className="w-full"
          />
        </motion.div>
        {/* Usman */}
        <motion.div 
          initial={{ scale: "0.8", x: "-100px", opacity: 0 }}
          whileInView={{ scale: 1, x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        id="founder"
        className="w-15 h-15 bg-green-200 border-1 border-green-300 rounded-full overflow-hidden">
          <Image
            src="/usman.JPG"
            alt="usman abdulazeez"
            width={200}
            height={200}
            priority
            className="w-full"
          />
        </motion.div>
      </div>
      <h2 className="mt-3 text-center font-medium text-gray-700 text-xl md:w-[70%] lg:w-[50%]">
        "Built by a Nigerian {"\u{1F1F3}\u{1F1EC}"} developers passionate about
        using technology to solve real problems in our agricultural sector."
      </h2>
      <h3 className="text-center text-gray-500 font-medium text-lg mt-2">
        - Founder, FarmLook
      </h3>
    </section>
  );
}

export default Founders
