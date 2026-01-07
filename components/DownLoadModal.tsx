"use client"
import {AnimatePresence, motion} from "framer-motion"
import { FaRegClock, FaXmark } from "react-icons/fa6"
import { LuConstruction } from "react-icons/lu"
import { TbPercentage90 } from "react-icons/tb"

interface Props {
  setShowDownloadModal: (showDownloadModal: boolean) => void;
}

const DownLoadModal = ({setShowDownloadModal}: Props) => {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 0.4}}
    className="fixed top-0 left-0 w-full min-h-screen flex items-center justify-center  bg-green-400">
      <div onClick={() => setShowDownloadModal(false)} className="absolute top-5 left-5 p-2 cursor-pointer">
          <FaXmark className="text-2xl hover:text-gray-500"/>
        </div>
      <AnimatePresence>
        <motion.div
        initial={{y: "200px"}}
        animate={{y: 0}}
        exit={{y: "200px"}}
        transition={{duration: 0.5}}
      className="w-[95%] max-w-120 h-fit p-5 bg-green-100 border border-gray-300 rounded-xl flex flex-col items-center justify-center">
          <div className="w-12 h-12 flex items-center justify-center bg-yellow-200 rounded-full overflow-hidden mb-10">
            <LuConstruction className="text-yellow-600 text-2xl" />
          </div>
          <h2 className="text-center text-md font-medium text-gray-600">
            OOPS! Sorry. FarmLook mobile App is under development right now, and it will be available soon!
          </h2>
          <div className="mt-12 w-full h-3 rounded-full bg-gray-300 overflow-hidden">
            <div className="w-[97%] h-full rounded-full bg-green-500" />
          </div>
          <div className="w-full flex items-center justify-between mt-2">
            <h3 className="text-sm text-gray-600 font-medium flex items-center">
              <TbPercentage90 className="mr-1" /> 95% Completed
            </h3>
            <h3 className="text-sm text-gray-600 font-medium flex items-center">
              <FaRegClock className="mr-1" /> before 20 - January
            </h3>
          </div>
        </motion.div>
      </AnimatePresence>
      
    </motion.div>
    
  )
}

export default DownLoadModal