import Link from 'next/link'
import React from 'react'
import { FaCircleChevronRight } from 'react-icons/fa6'

export default function CardProvider () {
  return (
    <div
      className='grid md:grid-cols-2 group w-full min-h-[400px] h-full max-h-[600px] overflow-hidden
     bg-[var(--primary)]  z-0'
    >
      <div id='info' className='p-6 relative'>
        <div className='text-sm text-gray-100 font-medium'>CATEGORY</div>
        <div className='text-title text-gray-100 font-bold'>TITLE</div>
        <div className=' text-gray-100 '>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eaque
          temporibus earum at molestias asperiores? Nulla nostrum sequi fugiat
          natus?
        </div>
        <Link
          href='/'
          className='text-white font-medium flex items-center gap-3 py-5 hover:opacity-70 duration-150'
        >
          อ่านเพิ่มเติม <FaCircleChevronRight />
        </Link>

        <div className="text-sm font-medium text-gray-200 absolute bottom-0 mb-5">โพสต์เมื่อ 22 Aug 2025</div>
      </div>

      <div id='cover' className='bg-white h-full overflow-clip'>
        <img
          src='https://images.unsplash.com/photo-1520361098688-a4b9960d394b?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          className='h-full w-full object-cover group-hover:scale-105 duration-200'
          alt='coverimage'
        />
      </div>
    </div>
  )
}
