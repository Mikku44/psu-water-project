import Link from 'next/link'
import React from 'react'
import { FaCircleChevronRight } from 'react-icons/fa6'

export default function NewsList () {

    const newsList = [
        1,2,3
    ]

  return (
    <div className='max-h-[600px] w-full  overflow-auto'>
      <div className='flex justify-between items-center'>
        <div className='text-xl font-bold'>ข่าวล่าสุด</div>
        <Link
          href='/public-relations'
          className=' font-medium flex items-center gap-3  hover:opacity-70 duration-150'
        >
          ดูทั้งหมด <FaCircleChevronRight className='text-[var(--primary)]' />
        </Link>
      </div>

      <div className="mt-4 space-y-2">
          {/* card list */}
          {newsList.map((item,index)=><Link key={index} href="/public-relations/12345" className='grid grid-cols-3 gap-3 h-[120px] hover:opacity-90 duration-200'>
            <div className='h-full w-full object-cover'>
              <img 
              className='h-full w-full object-cover'
              src='https://images.unsplash.com/photo-1520361098688-a4b9960d394b?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='psu-image' />
            </div>
            <div className="col-span-2 h-full ">
                <div className="text-sm text-gray-800 font-medium">CATEGORY</div>
                <div className=" text-gray-900 font-medium line-clamp-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, ut.</div>
            </div>
          </Link>)}
      </div>
    </div>
  )
}
