"use client"
import Image from 'next/image'

const Founders = () => {
  return (
    <div className="w-full mt-[5rem] flex flex-col items-center justify-center px-6">
      <div className="flex items-center gap-2 mb-2">
        {/* Gentleman */}
        <div className="w-11 h-11 bg-green-200 border-1 border-green-300 rounded-full overflow-hidden">
          <Image
            src="/salihu.png"
            alt="salihu adamu"
            width={200}
            height={200}
            priority
            className="w-full"
          />
        </div>
        {/* Usman */}
        <div className="w-11 h-11 bg-green-200 border-1 border-green-300 rounded-full overflow-hidden">
          <Image
            src="/usman.JPG"
            alt="salihu adamu"
            width={200}
            height={200}
            priority
            className="w-full"
          />
        </div>
        {/* Sparker */}
        <div className="w-11 h-11 bg-green-200 border-1 border-green-300 rounded-full overflow-hidden">
          <Image
            src="/aliyu.png"
            alt="salihu adamu"
            width={200}
            height={200}
            priority
            className="w-full"
          />
        </div>
      </div>
      <h2 className="mt-3 text-center font-medium text-gray-700 text-lg md:w-[70%] lg:w-[50%]">
        "Built by a Nigerian {"\u{1F1F3}\u{1F1EC}"} developers passionate about
        using technology to solve real problems in our agricultural sector."
      </h2>
      <h3 className="text-center text-gray-500 font-medium text-lg mt-2">
        - Founder, FarmLook
      </h3>
    </div>
  );
}

export default Founders