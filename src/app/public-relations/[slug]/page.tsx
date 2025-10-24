import { INews } from '@/app/models/newsModel'
import { getNewsWithSlug } from '@/app/repositories/news'
import BreadcrumbChev from '@/components/Breadcrumb'
import NewsImageGallery from '@/components/NewsImageGallery' // <-- NEW IMPORT
import { notFound } from 'next/navigation'
import React from 'react'

interface INewsProps {
  params: Promise<{ slug: string }>
}

export default async function page({ params }: Readonly<INewsProps>) {
  const { slug } = await params
  const slugSearch: INews[] = (await getNewsWithSlug(slug)) || []

  if (slugSearch?.length > 0) {
    const currentNews = slugSearch[0]
    const items = [
      { href: '/public-relations', label: 'บทความ' },
      { href: '#', label: currentNews?.title }
    ]
    const renderContent = (content: INews['content']) => {
      return content?.data?.map((item, index) => {
        switch (item.type) {
          case 'heading':
            return (
              <h3
                key={index}
                className='text-2xl font-semibold text-gray-800 my-4'
              >
                {item.text}
              </h3>
            )
          case 'paragraph':
            return (
              <p key={index} className='text-gray-700 leading-relaxed my-2'>
                {item.text}
              </p>
            )
          case 'list':
            return (
              <ul
                key={index}
                className='list-disc list-inside ml-4 my-2 space-y-1 text-gray-700'
              >
                {item.text.split('\n').map((li, idx) => (
                  <li key={idx}>{li}</li>
                ))}
              </ul>
            )

          default:
            return (
              <p key={index} className='text-gray-700 my-2'>
                {item.text}
              </p>
            )
        }
      })
    }

    return (
      <main className='min-h-screen bg-white'>
        {/* Header Section */}
        <section className='bg-slate-50 min-h-[500px] relative'>
          <BreadcrumbChev items={items} className='container-x pt-10' />
          <div className='container-x flex h-[500px] justify-center flex-col'>
            <div className='text-5xl font-bold text-[var(--primary)]'>
              {currentNews?.title}
            </div>
            <div className='text-black/80 mt-4'>{currentNews?.description}</div>
          </div>
        </section>

        {/* Content Section */}
        <section className='container-x mt-10'>
          <div className='prose max-w-full'>
            {renderContent(currentNews.content)}
          </div>
        </section>

        {/* Image Gallery (Now using the Client Component with Modal) */}
        {currentNews.image_url?.length > 0 && (
          <section className='container-x my-10'>
            <NewsImageGallery
              imageUrls={currentNews.image_url}
              title={currentNews.title}
            />
          </section>
        )}
      </main>
    )
  } else {
    return notFound()
  }
}