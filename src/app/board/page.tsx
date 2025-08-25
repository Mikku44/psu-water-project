import Avatar from '@/components/Avatar'
import BreadcrumbChev from '@/components/Breadcrumb'
import React from 'react'

const items = [{ href: '#', label: 'คณะทีมวิจัย' }]

const mainTeam = [
  { name: 'รศ. ดร. ไชยวัฒน์ รงค์สยามานนท์', position: 'คณะการจัดการสิ่งแวดล้อม', src: '/board/dr_chai.png' },
  { name: 'ดร. พีรพัฒน์ โกศลศักดิ์สกุล', position: 'คณะการจัดการสิ่งแวดล้อม', src: '/board/dr_pira.png' },
  { name: 'ผศ.ดร. ธนันท์ ชุบอุปการ', position: 'คณะวิศวกรรมศาสตร์', src: '/board/ass_tanan.png' },
  { name: 'นางนันทิยา อินธนู', position: 'ศูนย์วิจัยภัยพิบัติทางธรรมชาติภาคใต้', src: '/board/miss_nanthi.png' },
  { name: 'รศ. ดร.ระวี เจียรวิภา', position: 'คณะทรัพยากรธรรมชาติ', src: '/board/asso_rawee.png' },
  { name: 'นางเบญจวรรณ ธีระกุล', position: 'นักวิจัย', src: '/board/miss_benj.png' },
  { name: 'นายฐิตินันท์ อินธนู', position: 'ศูนย์วิจัยภัยพิบัติทางธรรมชาติภาคใต้', src: '/board/mr_thitinan.png' },
  { name: 'พาซีย๊ะ ซีแต', position: 'นักวิจัยชุมชน ศูนย์วิจัยภัยพิบัติทางธรรมชาติภาคใต้', src: '/board/pasi.png' },
]
const extraTeam = [
  { name: 'ผศ.ดร.ณัฐพล แก้วทอง ', position: 'มหาวิทยาลัยเทคโนโลยีราชมงคลศรีวิชัย', src: '/board/ass_natha.png' },
  { name: 'ผศ.ดร.นันทิยา พนมจันทร์', position: 'มหาวิทยาลัยทักษิณ', src: '/board/ass_nanthi.png' },
  
]
const southDirector = [
  { name: 'รศ.ดร.ฉัตรไชย รัตนไชย', position: 'คณะการจัดการสิ่งแวดล้อม', src: '/board/asso_chart.png' },

  
]

export default function page () {
  return (
    <main className='min-h-screen'>
      <section className='bg-slate-50 min-h-[500px] max-h-[500px]'>
        <BreadcrumbChev items={items} className=' container-x pt-10' />
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
            <Avatar key={index} position={people.position} name={people.name} src={people.src} />
          ))}
        </div>
        <div className='text-2xl text-[var(--primary)] font-medium'>
          คณะทีมวิจัยหลัก
        </div>
        <div className='md:grid-cols-2 grid'>
          {mainTeam?.map((people, index: number) => (
            <Avatar key={index} position={people.position} name={people.name} src={people.src} />
          ))}
        </div>
        <div className='text-2xl text-[var(--primary)] font-medium'>
           คณะนักวิจัยร่วม
        </div>
        <div className='md:grid-cols-2 grid'>
          {extraTeam?.map((people, index: number) => (
            <Avatar key={index} position={people.position} name={people.name} src={people.src} />
          ))}
        </div>
      </section>
    </main>
  )
}
