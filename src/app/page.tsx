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
        <div className='container-x flex md:flex-row flex-col gap-2 '>
          <div className='text-3xl md:text-2xl md:min-w-[400px] text-[var(--primary)] font-bold'>
            พื้นที่ดำเนินการ
          </div>
          <div className='opacity-90 md:max-w-[40vw]'>
            <img src='/map-plan.png' alt='แผนที่การดำเนินงานโปรเจค' />
          </div>
        </div>
      </section>

      {/* ผอ plan */}
      <section className=' md:py-20 py-10 md:mt-42 mt-20'>
        <div className='container-x flex  flex-col gap-2 '>
          <div className='text-3xl md:text-2xl md:min-w-[400px] text-[var(--primary)] font-bold'>
            พื้นที่การดำเนินการ
          </div>
          <div className='opacity-90 flex justify-between mt-5 items-center md:flex-row flex-col'>
            {/* pattalung */}
            <div className='space-y-5'>
              <div className='grid gap-5 mt-2'>
                <img
                  src='/home/pattalung-map.png'
                  className='max-w-[200px]'
                  alt='พัทลุง พื้นที่ดำเนินการ'
                />
              </div>

              <div className='flex gap-2 items-center'>
                <div className='rounded-full size-[80px] overflow-hidden  flex '>
                  <img
                    src='/home/pattalung-team.png'
                    className='w-full h-full object-cover'
                    alt='พัทลุง ผู้รับผิดชอบโครงการ'
                  />
                </div>

                <div className=''>
                  <div className='text-xl'>จังหวัดพัทลุง</div>
                  <div className='text-sm text-black/80'>
                    {' '}
                    รศ.ดร.ไชยวัฒน์ รงค์สยามานนท์ หัวหน้าโครงการ
                  </div>
                </div>
              </div>
            </div>
            {/* songkla */}

            <div className='space-y-5'>
              <div className='grid gap-5 mt-2'>
                <img
                  src='/home/songkla-map.png'
                  className='max-w-[200px]'
                  alt='สงขลา พื้นที่ดำเนินการ'
                />
              </div>

              <div className='flex gap-2 items-center'>
                <div className='rounded-full size-[80px] overflow-hidden  flex '>
                  <img
                    src='/home/sonkla-team.png'
                    className='w-full h-full object-cover'
                    alt='สงขลา ผู้รับผิดชอบโครงการ'
                  />
                </div>

                <div className=''>
                  <div className='text-xl'>จังหวัดสงขลา</div>
                  <div className='text-sm text-black/80'>
                    {' '}
                    ดร.พีรพัฒน์ โกศลศักดิสกุล หัวหน้าโครงการ
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* oppotunity plan */}
      <section className='bg-slate-50 md:py-20 py-10 md:mt-42 mt-20'>
        <div className='container-x flex  flex-col gap-2 '>
          <div className='text-3xl md:text-2xl md:min-w-[400px] text-[var(--primary)] font-bold'>
            เป้าหมาย
          </div>
          <div className='opacity-90 flex justify-between mt-5 items-center md:flex-row flex-col'>
            <div className=''>
              <div className='text-xl'>จังหวัดพัทลุง</div>
              <div className='text-sm text-black/80'>
                <ul>
                  <li>1{')'} ลดพืนทีนาท่วม นาแล้ง ลง 3 ตําบล</li>
                  <li>2{')'}ลดความเดือดร้อนจากนาท่วมลดลง 2729 ครัวเรือน</li>
                  <li>
                    3{')'} เกษตรกรได้รับความเดือดร้อนจากภัยพิบัติลดลง 1364
                    ครัวเรือน
                  </li>
                  <li>
                    4{')'} ลดค่าใช้จ่าย ค่าชดเชยเยียวยาของภาครัฐจํานวน 682
                    ครัวเรือน
                  </li>
                </ul>
              </div>
            </div>
            {/*  */}
            <div className=''>
              <div className='text-xl '>จังหวัดสงขลา</div>
              <div className='text-sm text-black/80'>
                {' '}
                <ul>
                  <li>1{')'} ลดพืนทีนาท่วม นาแล้ง ลง 12 ตําบลนําร่อง</li>
                  <li>
                    2{')'} ลดความเดือดร้อนจากนาท่วม นาแล้ง 15,000 ครัวเรือน
                  </li>
                  <li>
                    3{')'} ลดความเดือดร้อนต่อเกษตรกรจากนาท่วม นาแล้ง 7,500
                    ครัวเรือน
                  </li>
                  <li>
                    4{')'} ลดค่าใช้จ่าย ค่าชดเชยเยียวยาของภาครัฐสําจํานวน 2,250
                    ครัวเรือน{' '}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* divider */}
      <div className='mt-10 h-1'> </div>
    </main>
  )
}
