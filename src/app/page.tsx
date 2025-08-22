import CardProvider from '@/components/CardProvider'
import NewsList from '@/components/NewsList'
import Link from 'next/link'
import { FaCircleChevronRight } from 'react-icons/fa6'

export default function Home () {
  return (
    <main className='min-h-screen w-full mt-10'>
      {/* news section */}
      <section className='container-x grid md:grid-cols-3 gap-5'>
        <div className='md:col-span-2'>
          <CardProvider />
        </div>
        <NewsList />
      </section>

      {/* about project */}
      <section className='container-x flex md:flex-row flex-col gap-10 md:mt-42 mt-20'>
        <div className='text-3xl md:text-2xl md:min-w-[400px] text-[var(--primary)] font-bold'>
          เกี่ยวกับโครงการ
        </div>
        <div className='opacity-90 md:max-w-[40vw]'>
          โครงการ
          การจัดทำแผนหลักการบริหารจัดการทรัพยากรน้ำแบบบูรณาการระดับจังหวัด
          และการขยายผลการเพิ่มประสิทธิภาพการบริหารจัดการน้ำแบบมีส่วนร่วม
          จังหวัดพัทลุง จังหวัดสงขลา-พัทลุง
          <Link
            href='/'
            className='mt-2 font-medium flex items-center gap-3  hover:opacity-70 duration-150'
          >
            อ่านเพิ่มเติม{' '}
            <FaCircleChevronRight className='text-[var(--primary)]' />
          </Link>
        </div>
      </section>

      {/* objective */}

      <section className='container-x flex md:flex-row flex-col gap-10 md:mt-42 mt-20'>
        <div className='text-3xl md:text-2xl md:min-w-[400px] text-[var(--primary)] font-bold'>
          วัตถุประสงค์โครงการ
        </div>
        <div className='opacity-90 md:max-w-[40vw]'>
          <ul className='space-y-2'>
            <li>
              1.เพื่อสนับสนุนแผนปฎิบัติการของโครงการจังหวัดภาคใต้ให้บรรลุเป้าหมาย
            </li>
            <li>
              2. เพื่อติดตามความก้าวหน้าและสนับสนุนการทำ
              งานของแผนงานการจัดการน้ำ ใน จังหวัดสงขลาและจังหวัดพัทลุง
            </li>
            <li>
              3. เพื่อทบทวนรายงานและให้ความเห็นรายงานของแผนการจัดการน้ำ จังหวัด
            </li>
            <li>4. เพื่อสื่อสารและประชาสัมพันธ์งานการจัดการน้ำ ในภาคใต้</li>
          </ul>
        </div>
      </section>

      {/* map plan */}
      <section className='bg-slate-50 md:py-20 py-10 md:mt-42 mt-20'>
        <div className="container-x flex md:flex-row flex-col gap-2 ">
          <div className='text-3xl md:text-2xl md:min-w-[400px] text-[var(--primary)] font-bold'>
            พื้นที่ดำเนินการ
          </div>
          <div className='opacity-90 md:max-w-[40vw]'>
            <img src='/map-plan.png' alt='แผนที่การดำเนินงานโปรเจค' />
          </div>
        </div>
      </section>

      {/* divider */}
      <div className='mt-10 h-1'> </div>
    </main>
  )
}
