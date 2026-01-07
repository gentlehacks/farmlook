"use client"
import DownLoadModal from '@/components/DownLoadModal'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaAppStoreIos, FaArrowLeft, FaGooglePlay } from 'react-icons/fa6'

const Download = () => {
  const [showDownLoadModal, setShowDownloadModal] = useState<boolean>(false);

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center bg-green-100 text-gray-700">

      {/* Header */}
      <div className='w-full fixed top-0 left-0 bg-green-600/20 backdrop-filter backdrop-blur-md flex items-center px-6 py-4'>
        <Link href="/" className='flex items-center'>
          <FaArrowLeft className='text-xl text-gray-600' />
          <h2 className='ml-2'>
            Back
          </h2>
        </Link>
      </div>

      {/* Contents */}
      <section className='w-full flex flex-col items-center justify-center mx-auto px-6'>
        <Image src="/logo.png" alt="farmlook logo" width={200} height={200} className='w-12 h-12' />
        <h2 className='text-center font-medium text-gray-600 text-lg max-w-120 mt-10'>
          Get FarmLook Ai on your Android & IOS devices. Snap your crops picture and get Ai recommendations within seconds 🕔.
        </h2>
        <div className='w-full flex flex-col items-center justify-center mt-16'>
          <p className='text-gray-400 mb-3'>Available On:</p>
          <div className='flex items-center gap-6'>
            <button onClick={() => setShowDownloadModal(true)} className='flex items-center justify-center px-4 py-2 rounded-md border-2 border-gray-400 bg-gray-300 hover:border-green-600 hover:bg-green-200 transition-all duration-200 cursor-pointer'>
              <FaGooglePlay className='mr-2 text-lg' /> <h2 className='font-medium text-md'>Android</h2>
            </button>
            <button onClick={() => setShowDownloadModal(true)} className='flex items-center justify-center px-4 py-2 rounded-md border-2 border-gray-400 bg-gray-300 hover:border-green-600 hover:bg-green-200 transition-all duration-200 cursor-pointer'>
              <FaAppStoreIos className='mr-2 text-lg' /> 
              <h2 className='font-medium text-md'>IPhone</h2>
            </button>
          </div>
          
        </div>
      </section>
      
      {showDownLoadModal && (
        <DownLoadModal 
          setShowDownloadModal={setShowDownloadModal} 
        />
      )}
    </div>
  )
}

export default Download