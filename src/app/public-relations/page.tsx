import CardProvider from '@/components/CardProvider'
import Link from 'next/link'
import React from 'react'
import { getFilterNews } from '../repositories/news'
import BreadcrumbChev from '@/components/Breadcrumb'
import { IoIosSearch } from 'react-icons/io'
import { HiOutlineNewspaper } from 'react-icons/hi2'

const items = [{ href: '#', label: 'ประชาสัมพันธ์' }]

interface PageProps {
  searchParams: {
    q?: string
    sort?: 'latest' | 'oldest' | 'name'
  }
}

export default async function Page({ searchParams }: PageProps) {
  const query = searchParams.q || ''
  const sort = searchParams.sort || 'latest'

  // Fetch news with filters
  const result = await getFilterNews({ query, sort })

  return (
    <section className='min-h-screen'>
      <BreadcrumbChev items={items} className=' container-x pt-10' />
      <section className='container-x grid  gap-5'>
        <CardProvider />
      </section>

      <section className='container-x md:py-20 py-10 '>
        <div className='text-3xl font-bold text-[var(--primary)]'>
          ข่าวประชาสัมพันธ์
        </div>

        <section className='grid md:grid-cols-4 gap-5'>
          {/* Search Panel */}
          <div className='pt-5'>
            <form
              action="/public-relations"
              method="GET"
              className='gap-4 flex flex-col'
            >
              {/* Search Input */}
              <div className='flex-1'>
                <label
                  className='w-full flex justify-between items-center 
                  px-4 py-2 border border-gray-300 rounded-full
                  focus-within:ring-2 focus-within:ring-blue-400 
                  focus-within:border-transparent transition'
                >
                  <input
                    type='text'
                    name='q'
                    // defaultValue={query}
                    placeholder='ค้นหา...'
                    className='focus:outline-none flex-1 bg-transparent'
                  />
                  <IoIosSearch className="text-gray-500" />
                </label>
              </div>

              {/* Sort Section */}
              <div className='flex flex-col mt-2'>
                <select
                  id='sort'
                  name='sort'
                  // defaultValue={sort}
                  className='px-3 py-2 border w-full border-gray-300 rounded-full 
                  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition'
                >
                  <option value='latest'>ล่าสุด</option>
                  <option value='oldest'>เก่า</option>
                  <option value='name'>ชื่อ</option>
                </select>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className='mt-4 bg-[var(--primary)] hover:opacity-70 text-white font-semibold py-2 px-4 rounded-full transition'
              >
                ค้นหา
              </button>
            </form>
          </div>

          {/* News list */}
          <div className='space-y-3 md:col-span-3 w-full'>
            <div className='text-xl font-bold text-[var(--primary)]'>
              {result?.length || 0} Found
            </div>
            <hr />

            {result && result.length > 0 ? (
              <div className='grid gap-5 mt-10'>
                {result.map((item, index) => (
                  <Link
                    key={index}
                    href={'/public-relations/' + item.slug}
                    className='grid relative grid-cols-3  w-full group hover:bg-blue-50/20 gap-3 h-[200px] overflow-hidden hover:opacity-90 duration-200'
                  >
                    <div className='h-[200px] w-full overflow-hidden object-cover'>
                      <img
                        className='h-full w-full group-hover:scale-105 duration-200 object-cover'
                        src={
                          item?.image_url?.[0] ||
                          'https://images.unsplash.com/photo-1520361098688-a4b9960d394b?q=80&w=1172&auto=format&fit=crop'
                        }
                        alt='psu-image'
                      />
                    </div>
                    <div className='col-span-2 h-full p-5 relative'>
                      <div className='text-lg text-gray-800 font-bold'>
                        {item?.title || 'ข่าวประชาสัมพันธ์'}
                      </div>
                      <div className=' text-gray-600 text-sm line-clamp-3 '>
                        {item?.description}
                      </div>

                      <div className=' absolute m-2 flex justify-between text-[12px] text-gray-500 px-8 w-full bottom-0 right-0'>
                        <div className=''>แผนน้ำภาคใต้วช.</div>
                        <div className=''>
                          อัพโหลดเมื่อ :{' '}
                          {new Date(item?.created_at).toDateString()}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-gray-500">
                <HiOutlineNewspaper size={48} className="mb-4" />
                <p className="text-lg font-medium">ไม่พบข่าวประชาสัมพันธ์</p>
                <p className="text-sm">ลองค้นหาด้วยคำอื่น ๆ หรือเปลี่ยนการเรียงลำดับ</p>
              </div>
            )}
          </div>
        </section>
      </section>
    </section>
  )
}
