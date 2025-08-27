import CardProvider from '@/components/CardProvider'
import NewsList from '@/components/NewsList'
import Link from 'next/link'
import { BsCaretRightFill } from 'react-icons/bs'
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
            href='/public-relations'
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
          <div className='opacity-90 flex justify-between mt-5 gap-10 items-center md:flex-row flex-col'>
            {/* pattalung */}
            <div className='space-y-5 flex flex-col-reverse'>
              <div className='grid gap-5 mt-2'>
                <img
                  src='/home/pattalung-map.png'
                  className='w-full'
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

            <div className='space-y-5 flex flex-col-reverse'>
              <div className='grid gap-5 mt-2'>
                <img
                  src='/home/songkla-map.png'
                  className='w-full'
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

      {/* principle */}

      <section className='md:py-20 py-10  mt-10'>
        <div className='container-x '>
          <div className='text-center mb-2 text-black/60'>
            หลักคิดการจัดการน้ำ
          </div>
          <div className='text-4xl md:text-5xl text-center md:min-w-[400px] text-[var(--primary)] font-bold'>
            &quot;น้ำมั่นคง ไม่ท่วม ไม่แล้ง&quot;
          </div>
        </div>

        <div className=' flex md:flex-row flex-col items-center justify-between gap-10 container-x mt-10'>
          {/* 1 */}
          <div className='rounded-xl bg-linear-90 from-blue-100 to-blue-50 p-5'>
            <div className='text-4xl font-bold'>1</div>
            <div className=''>การจัดการฐานข้อมูล น้ำท่วม-น้ำแล้ง</div>
          </div>
          <BsCaretRightFill className='text-3xl md:rotate-0 rotate-90' />
          {/* 2 */}
          <div className='rounded-xl bg-linear-90 from-blue-100 to-blue-50 p-5'>
            <div className='text-4xl font-bold'>2</div>
            <div className=''>ความรู้ นวัตกรรมและเทคโนโลยี</div>
          </div>
          <BsCaretRightFill className='text-3xl md:rotate-0 rotate-90' />
          {/* 3 */}
          <div className='rounded-xl bg-linear-90 from-blue-100 to-blue-50 p-5'>
            <div className='text-4xl font-bold'>3</div>
            <div className=''>การเพิ่มรายได้หรือ ลดผลกระทบ</div>
          </div>
        </div>
      </section>

      {/* system */}

      <section className='md:py-20 py-10  mt-10'>
        <div className='container-x '>
          <div className='text-center mb-2 text-black/60'>
            ระบบฐานข้อมูลสารสนเทศน้ำระดับพื้นที่
          </div>
          <div className='text-4xl md:text-5xl text-center md:min-w-[400px] text-[var(--primary)] font-bold'>
            ตำบลจังหวัดกรม
          </div>

          {/* 1 */}
          <div className='flex md:flex-row flex-col justify-around'>
            <div className=''>
              <div className='mt-10 text-lg mb-2 font-bold rounded-xl bg-linear-90 from-blue-100 to-blue-50 p-5'>
                สถานการณ์ปัญหาด้านการจัดการน้ำในพื้นที่จังหวัดพัทลุง
              </div>
              <div className=''>
                <b>ปลายน้ำ :</b> น้ำท่วมซ้ำซาก (เมือง, ควนขนุน, เขาชัยสน ฯลฯ)
              </div>
              <div className=''>
                <b>กลางน้ำ</b> : การขาดแคลนน้ำเพื่อการเกษตร
              </div>
              <div className=''>
                <b>ต้นน้ำ</b> : น้ำป่าไหลหลาก (ป่าบอน, กงหรา, ศรีนครินทร์ ฯลฯ){' '}
              </div>
            </div>
            {/* 2 */}
            <div className=''>
              <div className='mt-10 text-lg mb-2 font-bold rounded-xl bg-linear-90 from-blue-100 to-blue-50 p-5'>
                สถานการณ์ปัญหาด้านการจัดการน้ำในจังหวัดสงขลา
              </div>
              <div className=''>
                <b>น้ำท่วมซ้ำซาก</b> : ในพื้นที่ อำเภอระโนด อำเภอหาดใหญ่
                และอำเภอกระแสสินธ์ุ
              </div>
              <div className=''>
                <b>การขาดแคลนน้ำ</b> : ในช่วงหน้าแล้ง เพื่อการอุปโภค บริโภค
                และการเกษตร
              </div>
              <div className=''>
                <b>น้ำเค็ม</b> : เข้ามาในทะเลสาบสงขลาในฤดูแล้ง{' '}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* flow-chart concept */}

      <section className='md:py-20 py-10  mt-10'>
        <div className='container-x '>
          <div className='text-center mb-2 text-black/60'>
            แนวคิดการจัดการน้ำจังหวัด
          </div>
          <div className='text-4xl md:text-5xl text-center md:min-w-[400px] text-[var(--primary)] font-bold'>
            ต้นแบบจังหวัดขอนแก่น
          </div>

          <div className='rounded-xl mt-5 overflow-hidden  flex '>
            <img
              src='/home/khonkaen.png'
              className='w-full h-full object-cover'
              alt='ต้นแบบจังหวัดขอนแก่น'
            />
          </div>
        </div>
      </section>

      {/*  concept */}

      <section className='md:py-20 py-10 mt-10'>
        <div className='container-x'>
          <div className='text-center mb-2 text-black/60'>
            แนวทางการจัดทำแผนน้ำจังหวัด
          </div>
          <div className='text-4xl md:text-5xl text-center md:min-w-[400px] text-[var(--primary)] font-bold'>
            &quot;บูรณาการ ชัดเจน ไม่ซ้ำซ้อน เป็นระบบ&quot;
          </div>

          <div className='grid grid-cols-1 md:grid-cols-4 mx-auto w-fit gap-2 mt-10'>
            <div className='text-lg mb-2 font-bold rounded-xl border  p-5 shadow-md hover:shadow-lg transition-shadow'>
              <div className='rounded-full bg-[var(--primary)]  left-[-30px] text-white shadow p-2 size-[30px] flex items-center justify-center'>
                1
              </div>
              ประชุมรับมอบนโยบายและแนวทางการบริหารจัดการน้ำจากผู้ว่าราชการจังหวัด
            </div>

            <div className='text-lg mb-2 font-bold rounded-xl border  p-5 shadow-md hover:shadow-lg transition-shadow'>
              <div className='rounded-full bg-[var(--primary)]  left-[-30px] text-white shadow p-2 size-[30px] flex items-center justify-center'>
                2
              </div>{' '}
              แต่งตั้งคณะทำงานเพื่อสนับสนุนการบริหารจัดการทรัพยากรน้ำจังหวัด
            </div>

            <div className='text-lg mb-2 font-bold rounded-xl border  p-5 shadow-md hover:shadow-lg transition-shadow'>
              <div className='rounded-full bg-[var(--primary)]  left-[-30px] text-white shadow p-2 size-[30px] flex items-center justify-center'>
                3
              </div>
              รวบรวมข้อมูลและวิเคราะห์ความเสี่ยงแล้ง/ท่วม
            </div>

            <div className='text-lg mb-2 font-bold rounded-xl border  p-5 shadow-md hover:shadow-lg transition-shadow'>
              <div className='rounded-full bg-[var(--primary)]  left-[-30px] text-white shadow p-2 size-[30px] flex items-center justify-center'>
                4
              </div>{' '}
              ประชุมจัดทำแผน
            </div>

            <div className='text-lg mb-2 font-bold rounded-xl border  p-5 shadow-md hover:shadow-lg transition-shadow'>
              <div className='rounded-full bg-[var(--primary)]  left-[-30px] text-white shadow p-2 size-[30px] flex items-center justify-center'>
                5
              </div>{' '}
              ทบทวน แผนงาน/โครงการ (เพิ่มเติม) จากพื้นที่
            </div>

            <div className='text-lg mb-2 font-bold rounded-xl border  p-5 shadow-md hover:shadow-lg transition-shadow'>
              <div className='rounded-full bg-[var(--primary)]  left-[-30px] text-white shadow p-2 size-[30px] flex items-center justify-center'>
                6
              </div>{' '}
              ประชุมทบทวน เป้าหมาย ตัวชี้วัด แผนบริหารจัดการน้ำของจังหวัด
            </div>

            <div className='text-lg mb-2 font-bold rounded-xl border  p-5 shadow-md hover:shadow-lg transition-shadow'>
              <div className='rounded-full bg-[var(--primary)]  left-[-30px] text-white shadow p-2 size-[30px] flex items-center justify-center'>
                7
              </div>{' '}
              ประชาสัมพันธ์ นำเสนอ แผนในคณะอนุกรรมการน้ำ- ประชุม กบจ. -
              ลงนามประกาศใช้แผน
            </div>

            <div className='text-lg mb-2 font-bold rounded-xl border  p-5 shadow-md hover:shadow-lg transition-shadow'>
              <div className='rounded-full bg-[var(--primary)]  left-[-30px] text-white shadow p-2 size-[30px] flex items-center justify-center'>
                8
              </div>{' '}
              ประชุมกรรมการน้ำเขตเมือง ทำ MOU ควบคุมระดับน้ำแก้มลิง
            </div>

            <div className='text-lg mb-2 font-bold rounded-xl border p-5 shadow-md hover:shadow-lg transition-shadow'>
              <div className='rounded-full bg-[var(--primary)]  left-[-30px] text-white shadow p-2 size-[30px] flex items-center justify-center'>
                9
              </div>{' '}
              ติดตามประเมินผล ทบทวนเป้าหมายปีต่อไป
            </div>
          </div>
        </div>
      </section>

      {/* Proposal */}

      {/* <section className='md:py-20 py-10  mt-10'>
        <div className='container-x '>
          <div className='text-4xl md:text-5xl text-center md:min-w-[400px] text-[var(--primary)] font-bold'>
            &quot;โครงสร้างคณะทำงานระดับจังหวัด&quot;
          </div>

          <div className='rounded-xl mt-5 overflow-hidden  flex '>
            <img
              src='/home/provice-project.png'
              className='w-full h-full object-cover'
              alt='โครงสร้างคณะทำงาน'
            />
          </div>
        </div>
      </section> */}

      {/* plan */}
      <section className='mt-20'>
        <div className='container-x flex md:flex-row flex-col gap-8'>
          <h2 className='text-3xl md:text-2xl text-[var(--primary)] md:max-w-[300px] font-bold'>
            แผนปฏิบัติการกระบวนการดำเนินงาน &quot;น้ำจังหวัด&quot;
          </h2>

          <div className='flex gap-20 md:flex-row md:px-0 px-10 justify-center flex-col'>
            <div className='rounded-xl mt-5 max-w-[500px] overflow-hidden  flex '>
              <img
                src='/home/map.png'
                className='w-full h-full object-cover'
                alt='map'
              />
            </div>

            <div className='relative border-l-4 border-[var(--primary)] pl-6 space-y-8'>
              <div className='relative'>
                <div className='absolute left-[-38px] top-1 w-6 h-6 rounded-full bg-[var(--primary)]'></div>
                <p className='text-lg font-semibold'>เดือนที่ 1</p>
                <p className='text-gray-700'>จัดตั้งคณะทำงาน</p>
              </div>
              <div className='relative'>
                <div className='absolute left-[-38px] top-1 w-6 h-6 rounded-full bg-[var(--primary)]'></div>
                <p className='text-lg font-semibold'>เดือนที่ 2</p>
                <p className='text-gray-700'>วิเคราะห์ข้อมูล ความเสี่ยง</p>
              </div>
              <div className='relative'>
                <div className='absolute left-[-38px] top-1 w-6 h-6 rounded-full bg-[var(--primary)]'></div>
                <p className='text-lg font-semibold'>เดือนที่ 3</p>
                <p className='text-gray-700'>จัดทำแผน</p>
              </div>
              <div className='relative'>
                <div className='absolute left-[-38px] top-1 w-6 h-6 rounded-full bg-[var(--primary)]'></div>
                <p className='text-lg font-semibold'>เดือนที่ 4-6</p>
                <p className='text-gray-700'>จัดทำโครงการ และงบประมาณ</p>
              </div>
              <div className='relative'>
                <div className='absolute left-[-38px] top-1 w-6 h-6 rounded-full bg-[var(--primary)]'></div>
                <p className='text-lg font-semibold'>เดือนที่ 7-9</p>
                <p className='text-gray-700'>ติดตามและประเมินผล</p>
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
