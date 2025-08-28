import Avatar from '@/components/Avatar'
import BreadcrumbChev from '@/components/Breadcrumb'
import React from 'react'

const items = [{ href: '#', label: 'คณะทีมวิจัย' }]

const mainTeam = [
  {
    name: 'รศ. ดร. ไชยวัฒน์ รงค์สยามานนท์',
    position: 'คณะการจัดการสิ่งแวดล้อม',
    src: '/board/dr_chai.png'
  },
  {
    name: 'ดร. พีรพัฒน์ โกศลศักดิ์สกุล',
    position: 'คณะการจัดการสิ่งแวดล้อม',
    src: '/board/dr_pira.png'
  },
  {
    name: 'ผศ.ดร. ธนันท์ ชุบอุปการ',
    position: 'คณะวิศวกรรมศาสตร์',
    src: '/board/ass_tanan.png'
  },
  {
    name: 'นางนันทิยา อินธนู',
    position: 'ศูนย์วิจัยภัยพิบัติทางธรรมชาติภาคใต้',
    src: '/board/miss_nanthi.png'
  },
  {
    name: 'รศ. ดร.ระวี เจียรวิภา',
    position: 'คณะทรัพยากรธรรมชาติ',
    src: '/board/asso_rawee.png'
  },
  {
    name: 'นางเบญจวรรณ ธีระกุล',
    position: 'นักวิจัย',
    src: '/board/miss_benj.png'
  },
  {
    name: 'นายฐิตินันท์ อินธนู',
    position: 'ศูนย์วิจัยภัยพิบัติทางธรรมชาติภาคใต้',
    src: '/board/mr_thitinan.png'
  },
  {
    name: 'พาซีย๊ะ ซีแต',
    position: 'นักวิจัยชุมชน ศูนย์วิจัยภัยพิบัติทางธรรมชาติภาคใต้',
    src: '/board/pasi.png'
  }
]
const extraTeam = [
  {
    name: 'ผศ.ดร.ณัฐพล แก้วทอง ',
    position: 'มหาวิทยาลัยเทคโนโลยีราชมงคลศรีวิชัย',
    src: '/board/ass_natha.png'
  },
  {
    name: 'ผศ.ดร.นันทิยา พนมจันทร์',
    position: 'มหาวิทยาลัยทักษิณ',
    src: '/board/ass_nanthi.png'
  }
]
const southDirector = [
  {
    name: 'รศ.ดร.ฉัตรไชย รัตนไชย',
    position: 'คณะการจัดการสิ่งแวดล้อม',
    src: '/board/asso_chart.png'
  }
]

export default function page () {
  return (
    <main className='min-h-screen'>
      <section className='to-slate-50 from-slate-300 bg-linear-90 min-h-[500px] max-h-[500px]'>
        <BreadcrumbChev items={items} className=' container-x pt-10' />

        <svg
          xmlns='http://www.w3.org/2000/svg'
          width={24}
          height={24}
          className='size-[400px] absolute  text-slate-400 opacity-35 right-0'
          viewBox='0 0 24 24'
        >
          <g fill='none'>
            <path d='m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z'></path>
            <path
              fill='currentColor'
              d='M12 3a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m0 19a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m0-16a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 14a1 1 0 1 0 0-2a1 1 0 0 0 0 2m2.75-12.763a1.5 1.5 0 1 1-1.5 2.598a1.5 1.5 0 0 1 1.5-2.598M9.5 12a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m8 0a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m-6.2 4.214a1.5 1.5 0 1 0-2.599-1.5a1.5 1.5 0 0 0 2.598 1.5Zm4-1.5a1.5 1.5 0 1 0-2.599 1.5a1.5 1.5 0 0 0 2.598-1.5ZM9.25 7.237a1.5 1.5 0 1 1 1.5 2.598a1.5 1.5 0 0 1-1.5-2.598m8.407.52a1 1 0 1 1-1.414-1.414a1 1 0 0 1 1.414 1.414m-9.9 9.9a1 1 0 1 1-1.414-1.415a1 1 0 0 1 1.414 1.415M18 12a1 1 0 1 0 2 0a1 1 0 0 0-2 0M4 12a1 1 0 1 0 2 0a1 1 0 0 0-2 0m12.243 5.657a1 1 0 1 1 1.414-1.414a1 1 0 0 1-1.414 1.414m-9.9-9.9a1 1 0 1 1 1.414-1.414a1 1 0 0 1-1.414 1.414m10.84-3.734a.5.5 0 1 1-.866-.5a.5.5 0 0 1 .866.5m-9.5 16.454a.5.5 0 1 1-.866-.5a.5.5 0 0 1 .866.5M19.794 7.5a.5.5 0 1 0 .866-.5a.5.5 0 0 0-.866.5M3.34 17a.5.5 0 1 0 .866-.5a.5.5 0 0 0-.866.5m18.16-4.5a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m-19 0a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m17.294 4a.5.5 0 1 0 .866.5a.5.5 0 0 0-.866-.5M3.34 7a.5.5 0 1 0 .866.5a.5.5 0 0 0-.866-.5m12.977 13.477a.5.5 0 1 1 .866-.5a.5.5 0 0 1-.866.5m-9.5-16.454a.5.5 0 1 1 .866-.5a.5.5 0 0 1-.866.5'
            ></path>
          </g>
        </svg>
        <div className='container-x flex h-[500px] justify-center flex-col'>
          <div className='text-5xl font-bold text-[var(--primary)]'>
            คณะทีมวิจัย
          </div>
          <div className=' text-black/80'>
            รายชื่อผู้เกี่ยวข้องและคณะทีมวิจัยโครงการน้ำมั่นคง ไม่ท่วม ไม่แล้ง
            ภาคใต้
          </div>
        </div>
      </section>

      <section className='container-x py-10 space-y-2'>
        <div className='text-2xl text-[var(--primary)] font-medium'>
          ผอ.แผนภาคใต้
        </div>
        <div className='md:grid-cols-2 grid'>
          {southDirector?.map((people, index: number) => (
            <Avatar
              key={index}
              position={people.position}
              name={people.name}
              src={people.src}
            />
          ))}
        </div>
        <div className='text-2xl text-[var(--primary)] font-medium'>
          คณะทีมวิจัยหลัก
        </div>
        <div className='md:grid-cols-2 grid'>
          {mainTeam?.map((people, index: number) => (
            <Avatar
              key={index}
              position={people.position}
              name={people.name}
              src={people.src}
            />
          ))}
        </div>
        <div className='text-2xl text-[var(--primary)] font-medium'>
          คณะนักวิจัยร่วม
        </div>
        <div className='md:grid-cols-2 grid'>
          {extraTeam?.map((people, index: number) => (
            <Avatar
              key={index}
              position={people.position}
              name={people.name}
              src={people.src}
            />
          ))}
        </div>
      </section>
    </main>
  )
}
