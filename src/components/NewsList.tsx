import { getAllNews } from '@/app/repositories/news'
import Link from 'next/link'
import React from 'react'
import { FaCircleChevronRight } from 'react-icons/fa6'

export default async function NewsList () {
  const result = await getAllNews()

  console.log('NEWS :', result)

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

      <div className='mt-4 space-y-2'>
        {/* card list */}
        {result?.map((item, index) => (
          <Link
            key={index}
            href={'/public-relations/' + item.slug}
            className='grid relative grid-cols-3  w-full group hover:bg-blue-50/20 gap-3 h-[120px] overflow-hidden hover:opacity-90 duration-200'
          >
            <div className='h-[120px] w-full overflow-hidden object-cover'>
              {/* {item?.image_url} */}
              <img
                className='h-full w-full group-hover:scale-105 duration-200 object-cover'
                src={
                  item?.image_url?.[0] ||
                  'https://images.unsplash.com/photo-1520361098688-a4b9960d394b?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                }
                alt='psu-image'
              />
            </div>
            <div className='col-span-2 h-full  relative'>
              <div className='text-lg text-gray-800 font-bold line-clamp-1'>
                {item?.title || 'ข่าวประชาสัมพันธ์'}
              </div>
              <div className=' text-gray-600 text-sm line-clamp-3 '>
                {item?.description}
              </div>

              <div className=' absolute  flex justify-between text-[12px] text-gray-500 w-full bottom-0 left-0'>
                {/* <div className=''>แผนน้ำภาคใต้วช.</div> */}
                <div className=''>
                  อัพโหลดเมื่อ : {new Date(item?.created_at).toDateString()}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
