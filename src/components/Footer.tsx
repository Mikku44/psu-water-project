import Link from 'next/link'
import React from 'react'
import { FaFacebook } from 'react-icons/fa6'
import { HiPhone } from 'react-icons/hi'

export default function Footer () {
  return (
    <section className='bg-slate-50 pt-10 flex flex-col'>
      <div className='container-x flex md:flex-row flex-col gap-10 justify-between w-full py-5'>
        {/* col 1 */}
        <div className=''>
          <Link href='/' className='flex gap-2 items-center grayscale-100 '>
            <div className='w-[130px] h-[80px] flex items-center justify-center  overflow-hidden'>
              <img
                src='/psu-logo-th.png'
                className='w-full h-full object-cover'
                alt='psu logo'
              />
            </div>
            {/* แผนน้ำ ภาคใต้{' '} */}
          </Link>
        </div>
        {/* col 2 */}
        <div className=''>
          <Link href='/'>
            <div className='text-sm text-slate-800'>เกี่ยวกับโครงการ</div>
          </Link>
        </div>
        {/* col 3 */}
        <div className=''>
          <Link href='/board'>
            <div className='text-sm text-slate-800'>คณะทีมวิจัย</div>
          </Link>
        </div>
        {/* col 4 */}
        <div className=''>
          <Link href='/public-relations'>
            <div className='text-sm text-slate-800'>ข่าวประชาสัมพันธ์</div>
          </Link>
        </div>
      </div>
      <div className='w-full border-t border-slate-200 py-4'>
        <div className='container-x flex text-slate-600 justify-between '>
          <div className='flex gap-5 items-center'>
            <Link
              href='https://www.facebook.com/profile.php?id=61578115720469'
              target='_blank'
              rel='noreferal'
            >
              <FaFacebook />
            </Link>
            <Link href='tel:065 676 2309' target='_blank' rel='noreferal'>
              <HiPhone />
            </Link>
          </div>
          <div className='text-sm'>All Reserved 2025</div>
        </div>
      </div>
    </section>
  )
}
