import { INews } from '@/app/models/newsModel'
import { getNewsWithSlug } from '@/app/repositories/news'
import BreadcrumbChev from '@/components/Breadcrumb'
import { notFound } from 'next/navigation'
import React from 'react'

const items = [{ href: '#', label: 'บทความ' }]


interface INewsProps {
  params : Promise<{slug:string}>
}

export default async function page ({
  params
}:Readonly<INewsProps>) {

  const {slug} = await params;
  const slugSearch: INews[] = (await getNewsWithSlug(slug)) || []

  // console.log('slug :', slugSearch)

  if (slugSearch?.length > 0) {
    const currentNews = slugSearch[0];
    return (
      <main className='min-h-screen'>
        <section className='bg-slate-50 min-h-[500px] max-h-[500px] relative'>
         
          <BreadcrumbChev items={items} className=' container-x pt-10' />
          <div className='container-x flex h-[500px] justify-center flex-col'>
            <div className='text-5xl font-bold text-[var(--primary)]'>
              {currentNews?.title}
            </div>
            <div className=' text-black/80'>   .</div>
          </div>
        </section>

        {/* Content */}

        <section className="container-x mt-10">
          <div className="">test</div>
        </section>
      </main>
    )
  } else {
    return notFound();
  }
}
