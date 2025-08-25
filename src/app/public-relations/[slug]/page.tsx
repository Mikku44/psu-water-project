import BreadcrumbChev from '@/components/Breadcrumb'
import React from 'react'

const items = [{ href: '#', label: 'บทความ' }]


export default function page () {
  return (
    <main className='min-h-screen'>
      <section className='bg-slate-50 min-h-[500px] max-h-[500px]'>
        <BreadcrumbChev items={items} className=' container-x pt-10' />
        <div className='container-x flex h-[500px] justify-center flex-col'>
          <div className='text-5xl font-bold text-[var(--primary)]'>
            title
          </div>
          <div className=' text-black/80'>
            exert
          </div>
        </div>
      </section>
    </main>
  )
}
