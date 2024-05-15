import Link from 'next/link'
import React from 'react'

const Page1 = () => {
  return (
    <div className='h-screen w-full bg-black flex max-md:flex-col  items-center justify-center object-cover py-10 px-28 max-md:px-10 max-md:gap-5  gap-44 max-md:h-fit '>
        <div className='relative text-start items-start justify-start w-[30vw] max-md:w-full  gap-10 flex flex-col'>
          <img className=' mt-20 max-md:mt-10  max-md:h-[10vh] max-md:ml-3 h-[15vh] rounded-xl ' src="/adbro.png" alt="" />
          <p className='font-semibold text-white text-xs max-md:text-[10px]'>  Welcome to Adbrotisers, where we specialize in empowering creators,
businesses, and events to thrive in the digital realm. With a proven track record
of helping big names like Bhupendra Jogi and Mohit Tiwari monetize their
content and assisting businesses and events such as GrowUpFitness and
Nagar Associates to achieve digital growth, we're committed to driving
success in the online sphere. From guiding individuals in becoming creators to
crafting compelling content scripts for companies like Eklakshayy and
iDigitalPreneur, our passion lies in harnessing the power of digital platforms to
tell captivating stories and drive tangible results. Join us on your digital
journey, and let's turn your vision into reality together.</p>
       
          <Link href={"/construction"}  class="bg-[#7b8e96]  max-md:text-[8px] text-sm hover:bg-neutral-500  text-white  font-semibold py-3 px-11 max-md:py-1 max-md:px-2 border-blue-600  rounded-full shadow ease-in duration-150">
            Explore
          </Link>

        </div>

        <img className='h-[60vh]   max-md:h-[24vh] max-md:ml-2 flex items-center justify-center' src="/ads.png" alt="" />
      </div>
  )
}

export default Page1
