import { getLatestNews } from '@/app/repositories/news'
import Link from 'next/link'
import React from 'react'
import { FaCircleChevronRight } from 'react-icons/fa6'

export default async function CardProvider () {
  const result = await getLatestNews();

  const item = result ;
  return (
    <div
      className='grid md:grid-cols-2 group w-full min-h-[400px] h-full max-h-[600px] overflow-hidden
     bg-[var(--primary)]  z-0'
    >
      <div id='info' className='p-6 relative'>
        <div className='text-sm text-gray-100 font-medium'>ประชาสัมพันธ์</div>
        <div className='text-title text-gray-100 font-bold'>{item?.title || "ข่าวประชาสัมพันธ์"}</div>
        <div className=' text-gray-100 line-clamp-5'>
          {item?.description}
        </div>
        <Link
          href={'/public-relations/'+ item?.slug}
          className='text-white font-medium flex items-center gap-3 py-5 hover:opacity-70 duration-150'
        >
          อ่านเพิ่มเติม <FaCircleChevronRight />
        </Link>

        <div className="text-sm font-medium text-gray-200 absolute bottom-0 mb-5">โพสต์เมื่อ {new Date(item?.created_at).toDateString()}</div>
      </div>

      <div id='cover' className='bg-white h-full max-h-[500px] overflow-clip'>
        <img
          src={item?.image_url?.[0] || 'https://images.unsplash.com/photo-1520361098688-a4b9960d394b?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
          className='h-full w-full object-cover group-hover:scale-105 duration-200'
          alt='coverimage'
        />
      </div>
    </div>
  )
}
