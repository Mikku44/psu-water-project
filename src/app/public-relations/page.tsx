import CardProvider from '@/components/CardProvider'
// import NewsList from '@/components/NewsList'
import Link from 'next/link'
import React from 'react'
import { getAllNews } from '../repositories/news';


const newsList = [1, 2, 3]

export default async function page () {
  const result = await getAllNews();
  

  console.log("NEWS :",result);
  
  return (
    <section className='min-h-screen'>
      <section className='container-x grid mt-10  gap-5'>
        
        <CardProvider />
      </section>

      <section className='container-x md:py-20 py-10 '>
        <div className='text-3xl font-bold text-[var(--primary)]'>
          ข่าวประชาสัมพันธ์
        </div>

        <div className='grid md:grid-cols-2 gap-5 mt-10'>
          {newsList.map((item, index) => (
            <Link
              key={index}
              href='#'
              className='grid grid-cols-3 w-full group hover:bg-blue-50/20 gap-3 h-[200px] overflow-hidden hover:opacity-90 duration-200'
            >
              <div className='h-[200px] w-full overflow-hidden object-cover'>
                <img
                  className='h-full w-full group-hover:scale-105 duration-200 object-cover'
                  src='https://images.unsplash.com/photo-1520361098688-a4b9960d394b?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  alt='psu-image'
                />
              </div>
              <div className='col-span-2 h-full p-5'>
                <div className='text-sm text-gray-800 font-medium'>
                  CATEGORY
                </div>
                <div className=' text-gray-900 font-medium line-clamp-3 '>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis, ut.
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </section>
  )
}
