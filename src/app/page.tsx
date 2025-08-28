'use client'
import CardProvider from '@/components/CardProvider'
import NewsList from '@/components/NewsList'
import Link from 'next/link'
import { BsCaretRightFill } from 'react-icons/bs'
import { FaCircleChevronRight } from 'react-icons/fa6'
import { motion } from 'framer-motion'

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
}

export default function Home () {
  return (
    <main className='min-h-screen w-full mt-10'>
      {/* news section */}
      <motion.section
        className='container-x grid md:grid-cols-3 gap-5'
        initial='hidden'
        animate='visible'
        variants={staggerChildren}
      >
        <motion.div className='md:col-span-2' variants={fadeInLeft}>
          <CardProvider />
        </motion.div>
        <motion.div variants={fadeInRight}>
          <NewsList />
        </motion.div>
      </motion.section>

      {/* about project */}
      <motion.section
        className='container-x flex md:flex-row flex-col gap-10 md:mt-42 mt-20'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerChildren}
      >
        <motion.div
          className='text-3xl md:text-2xl md:min-w-[400px] text-[var(--primary)] font-bold'
          variants={fadeInLeft}
        >
          เกี่ยวกับโครงการ
        </motion.div>
        <motion.div
          className='opacity-90 md:max-w-[40vw]'
          variants={fadeInRight}
        >
          โครงการ
          การจัดทำแผนหลักการบริหารจัดการทรัพยากรน้ำแบบบูรณาการระดับจังหวัด
          และการขยายผลการเพิ่มประสิทธิภาพการบริหารจัดการน้ำแบบมีส่วนร่วม
          จังหวัดพัทลุง จังหวัดสงขลา-พัทลุง
          <Link
            href='/public-relations'
            className='mt-2 font-medium flex items-center gap-3  hover:opacity-70 duration-150'
          >
            อ่านเพิ่มเติม{' '}
            <motion.div
              whileHover={{ x: 5 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <FaCircleChevronRight className='text-[var(--primary)]' />
            </motion.div>
          </Link>
        </motion.div>
      </motion.section>

      {/* objective */}
      <motion.section
        className='container-x flex md:flex-row flex-col gap-10 md:mt-42 mt-20'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerChildren}
      >
        <motion.div
          className='text-3xl md:text-2xl md:min-w-[400px] text-[var(--primary)] font-bold'
          variants={fadeInLeft}
        >
          วัตถุประสงค์โครงการ
        </motion.div>
        <motion.div
          className='opacity-90 md:max-w-[40vw]'
          variants={fadeInRight}
        >
          <motion.ul className='space-y-2' variants={staggerChildren}>
            {[
              '1.เพื่อสนับสนุนแผนปฎิบัติการของโครงการจังหวัดภาคใต้ให้บรรลุเป้าหมาย',
              '2. เพื่อติดตามความก้าวหน้าและสนับสนุนการทำงานของแผนงานการจัดการน้ำ ใน จังหวัดสงขลาและจังหวัดพัทลุง',
              '3. เพื่อทบทวนรายงานและให้ความเห็นรายงานของแผนการจัดการน้ำ จังหวัด',
              '4. เพื่อสื่อสารและประชาสัมพันธ์งานการจัดการน้ำ ในภาคใต้'
            ].map((item, index) => (
              <motion.li key={index} variants={fadeInUp}>
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.section>

      {/* map plan */}
      <motion.section
        className='bg-slate-50 md:py-20 py-10 md:mt-42 mt-20'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerChildren}
      >
        <div className='container-x flex md:flex-row flex-col gap-2 '>
          <motion.div
            className='text-3xl md:text-2xl md:min-w-[400px] text-[var(--primary)] font-bold'
            variants={fadeInLeft}
          >
            พื้นที่ดำเนินการ
          </motion.div>
          <motion.div
            className='opacity-90 md:max-w-[40vw]'
            variants={fadeInRight}
          >
            <motion.img
              src='/map-plan.png'
              alt='แผนที่การดำเนินงานโปรเจค'
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
      </motion.section>

      {/* ผอ plan */}
      <motion.section
        className=' md:py-20 py-10 md:mt-42 mt-20'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerChildren}
      >
        <div className='container-x flex  flex-col gap-2 '>
          <motion.div
            className='text-3xl md:text-2xl md:min-w-[400px] text-[var(--primary)] font-bold'
            variants={fadeInUp}
          >
            พื้นที่การดำเนินการ
          </motion.div>
          <div className='opacity-90 flex justify-between mt-5 gap-10 items-center md:flex-row flex-col'>
            {/* pattalung */}
            <motion.div
              className='space-y-5 flex flex-col-reverse'
              variants={fadeInLeft}
            >
              <motion.div
                className='grid gap-5 mt-2'
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src='/home/pattalung-map.png'
                  className='w-full'
                  alt='พัทลุง พื้นที่ดำเนินการ'
                />
              </motion.div>

              <motion.div
                className='flex gap-2 items-center'
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
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
              </motion.div>
            </motion.div>

            {/* songkla */}
            <motion.div
              className='space-y-5 flex flex-col-reverse'
              variants={fadeInRight}
            >
              <motion.div
                className='grid gap-5 mt-2'
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src='/home/songkla-map.png'
                  className='w-full'
                  alt='สงขลา พื้นที่ดำเนินการ'
                />
              </motion.div>

              <motion.div
                className='flex gap-2 items-center'
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
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
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* opportunity plan */}
      <motion.section
        className='bg-slate-50 md:py-20 py-10 md:mt-42 mt-20'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerChildren}
      >
        <div className='container-x flex  flex-col gap-2 '>
          <motion.div
            className='text-3xl md:text-2xl md:min-w-[400px] text-[var(--primary)] font-bold'
            variants={fadeInUp}
          >
            เป้าหมาย
          </motion.div>
          <div className='opacity-90 flex justify-between mt-5 items-center md:flex-row flex-col'>
            <motion.div className='' variants={fadeInLeft}>
              <div className='text-xl'>จังหวัดพัทลุง</div>
              <div className='text-sm text-black/80'>
                <motion.ul variants={staggerChildren}>
                  {[
                    '1) ลดพืนทีนาท่วม นาแล้ง ลง 3 ตําบล',
                    '2)ลดความเดือดร้อนจากนาท่วมลดลง 2729 ครัวเรือน',
                    '3) เกษตรกรได้รับความเดือดร้อนจากภัยพิบัติลดลง 1364 ครัวเรือน',
                    '4) ลดค่าใช้จ่าย ค่าชดเชยเยียวยาของภาครัฐจํานวน 682 ครัวเรือน'
                  ].map((item, index) => (
                    <motion.li key={index} variants={fadeInUp}>
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>

            <motion.div className='' variants={fadeInRight}>
              <div className='text-xl '>จังหวัดสงขลา</div>
              <div className='text-sm text-black/80'>
                <motion.ul variants={staggerChildren}>
                  {[
                    '1) ลดพืนทีนาท่วม นาแล้ง ลง 12 ตําบลนําร่อง',
                    '2) ลดความเดือดร้อนจากนาท่วม นาแล้ง 15,000 ครัวเรือน',
                    '3) ลดความเดือดร้อนต่อเกษตรกรจากนาท่วม นาแล้ง 7,500 ครัวเรือน',
                    '4) ลดค่าใช้จ่าย ค่าชดเชยเยียวยาของภาครัฐสําจํานวน 2,250 ครัวเรือน'
                  ].map((item, index) => (
                    <motion.li key={index} variants={fadeInUp}>
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* principle */}
      <motion.section
        className='md:py-20 py-10  mt-10'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerChildren}
      >
        <div className='container-x '>
          <motion.div
            className='text-center mb-2 text-black/60'
            variants={fadeInUp}
          >
            หลักคิดการจัดการน้ำ
          </motion.div>
          <motion.div
            className='text-4xl md:text-5xl text-center md:min-w-[400px] text-[var(--primary)] font-bold'
            variants={fadeInUp}
          >
            &quot;น้ำมั่นคง ไม่ท่วม ไม่แล้ง&quot;
          </motion.div>
        </div>

        <motion.div
          className=' flex md:flex-row flex-col items-center justify-between gap-10 container-x mt-10'
          variants={staggerChildren}
        >
          {/* 1 */}
          <motion.div
            className='rounded-xl bg-linear-90 from-blue-100 to-blue-50 p-5'
            variants={scaleIn}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
            }}
            transition={{ duration: 0.3 }}
          >
            <div className='text-4xl font-bold'>1</div>
            <div className=''>การจัดการฐานข้อมูล น้ำท่วม-น้ำแล้ง</div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            animate={{ x: [0, 10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: 'easeInOut'
            }}
          >
            <BsCaretRightFill className='text-3xl md:rotate-0 rotate-90' />
          </motion.div>

          {/* 2 */}
          <motion.div
            className='rounded-xl bg-linear-90 from-blue-100 to-blue-50 p-5'
            variants={scaleIn}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
            }}
            transition={{ duration: 0.3 }}
          >
            <div className='text-4xl font-bold'>2</div>
            <div className=''>ความรู้ นวัตกรรมและเทคโนโลยี</div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            animate={{ x: [0, 10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: 'easeInOut',
              delay: 1
            }}
          >
            <BsCaretRightFill className='text-3xl md:rotate-0 rotate-90' />
          </motion.div>

          {/* 3 */}
          <motion.div
            className='rounded-xl bg-linear-90 from-blue-100 to-blue-50 p-5'
            variants={scaleIn}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
            }}
            transition={{ duration: 0.3 }}
          >
            <div className='text-4xl font-bold'>3</div>
            <div className=''>การเพิ่มรายได้หรือ ลดผลกระทบ</div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* system */}
      <motion.section
        className='md:py-20 py-10  mt-10'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerChildren}
      >
        <div className='container-x '>
          <motion.div
            className='text-center mb-2 text-black/60'
            variants={fadeInUp}
          >
            ระบบฐานข้อมูลสารสนเทศน้ำระดับพื้นที่
          </motion.div>
          <motion.div
            className='text-4xl md:text-5xl text-center md:min-w-[400px] text-[var(--primary)] font-bold'
            variants={fadeInUp}
          >
            ตำบลจังหวัดกรม
          </motion.div>

          <motion.div
            className='flex md:flex-row flex-col justify-around'
            variants={staggerChildren}
          >
            <motion.div className='' variants={fadeInLeft}>
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
            </motion.div>

            <motion.div className='' variants={fadeInRight}>
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
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* flow-chart concept */}
      <motion.section
        className='md:py-20 py-10  mt-10'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerChildren}
      >
        <div className='container-x '>
          <motion.div
            className='text-center mb-2 text-black/60'
            variants={fadeInUp}
          >
            แนวคิดการจัดการน้ำจังหวัด
          </motion.div>
          <motion.div
            className='text-4xl md:text-5xl text-center md:min-w-[400px] text-[var(--primary)] font-bold'
            variants={fadeInUp}
          >
            ต้นแบบจังหวัดขอนแก่น
          </motion.div>

          <motion.div
            className='rounded-xl mt-5 overflow-hidden  flex'
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src='/home/khonkaen.png'
              className='w-full h-full object-cover'
              alt='ต้นแบบจังหวัดขอนแก่น'
            />
          </motion.div>
        </div>
      </motion.section>

      {/* concept */}
      <motion.section
        className='md:py-20 py-10 mt-10'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerChildren}
      >
        <div className='container-x'>
          <motion.div
            className='text-center mb-2 text-black/60'
            variants={fadeInUp}
          >
            แนวทางการจัดทำแผนน้ำจังหวัด
          </motion.div>
          <motion.div
            className='text-4xl md:text-5xl text-center md:min-w-[400px] text-[var(--primary)] font-bold'
            variants={fadeInUp}
          >
            &quot;บูรณาการ ชัดเจน ไม่ซ้ำซ้อน เป็นระบบ&quot;
          </motion.div>

          <motion.div
            className='grid grid-cols-1 md:grid-cols-4 mx-auto w-fit gap-2 mt-10'
            variants={staggerChildren}
          >
            {[
              'ประชุมรับมอบนโยบายและแนวทางการบริหารจัดการน้ำจากผู้ว่าราชการจังหวัด',
              'แต่งตั้งคณะทำงานเพื่อสนับสนุนการบริหารจัดการทรัพยากรน้ำจังหวัด',
              'รวบรวมข้อมูลและวิเคราะห์ความเสี่ยงแล้ง/ท่วม',
              'ประชุมจัดทำแผน',
              'ทบทวน แผนงาน/โครงการ (เพิ่มเติม) จากพื้นที่',
              'ประชุมทบทวน เป้าหมาย ตัวชี้วัด แผนบริหารจัดการน้ำของจังหวัด',
              'ประชาสัมพันธ์ นำเสนอ แผนในคณะอนุกรรมการน้ำ- ประชุม กบจ. - ลงนามประกาศใช้แผน',
              'ประชุมกรรมการน้ำเขตเมือง ทำ MOU ควบคุมระดับน้ำแก้มลิง',
              'ติดตามประเมินผล ทบทวนเป้าหมายปีต่อไป'
            ].map((text, index) => (
              <motion.div
                key={index}
                className='text-lg mb-2 font-bold rounded-xl border  p-5 shadow-md hover:shadow-lg transition-shadow'
                variants={scaleIn}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 15px 30px rgba(0,0,0,0.15)'
                }}
                transition={{ duration: 0.3 }}
              >
                <div className='rounded-full bg-[var(--primary)]  left-[-30px] text-white shadow p-2 size-[30px] flex items-center justify-center'>
                  {index + 1}
                </div>
                {text}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* plan timeline */}
      <motion.section
        className='mt-20'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerChildren}
      >
        <div className='container-x flex md:flex-row flex-col gap-8'>
          <motion.h2
            className='text-3xl md:text-2xl text-[var(--primary)] md:max-w-[300px] font-bold'
            variants={fadeInLeft}
          >
            แผนปฏิบัติการกระบวนการดำเนินงาน &quot;น้ำจังหวัด&quot;
          </motion.h2>

          <div className='flex gap-20 md:flex-row md:px-0 px-10 justify-center flex-col'>
            <motion.div
              className='rounded-xl mt-5 max-w-[500px] overflow-hidden  flex'
              variants={fadeInRight}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src='/home/map.png'
                className='w-full h-full object-cover'
                alt='map'
              />
            </motion.div>

            <motion.div
              className='relative border-l-4 border-[var(--primary)] pl-6 space-y-8'
              variants={staggerChildren}
            >
              {[
                { month: 'เดือนที่ 1', task: 'จัดตั้งคณะทำงาน' },
                { month: 'เดือนที่ 2', task: 'วิเคราะห์ข้อมูล ความเสี่ยง' },
                { month: 'เดือนที่ 3', task: 'จัดทำแผน' },
                { month: 'เดือนที่ 4-6', task: 'จัดทำโครงการ และงบประมาณ' },
                { month: 'เดือนที่ 7-9', task: 'ติดตามและประเมินผล' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className='relative'
                  variants={fadeInUp}
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className='absolute left-[-38px] top-1 w-6 h-6 rounded-full bg-[var(--primary)]'
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  ></motion.div>
                  <p className='text-lg font-semibold'>{item.month}</p>
                  <p className='text-gray-700'>{item.task}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* water management */}
      <motion.section
        className='mt-20'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerChildren}
      >
        <div className='container-x grid md:grid-cols-2 gap-8'>
          <motion.h2
            className='text-3xl md:text-2xl text-[var(--primary)] md:max-w-[300px] font-bold'
            variants={fadeInLeft}
          >
            การจัดการน้ำ &quot;จังหวัด-น้ำตำบล&quot;
          </motion.h2>

          <motion.div className=' ' variants={fadeInRight}>
            <motion.div
              className='rounded-xl mt-5 overflow-hidden  flex'
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src='/home/water-manage.png'
                className='w-full h-full object-cover'
                alt='การจัดการน้ำ'
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* map area songkhla */}
      <motion.section
        className='md:py-20 py-10 mt-10'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerChildren}
      >
        <div className='container-x'>
          <motion.div
            className='text-center mb-2 text-black/60'
            variants={fadeInUp}
          >
            พื้นที่เป้าหมาย
          </motion.div>
          <motion.div
            className='text-4xl md:text-5xl text-center text-[var(--primary)] font-bold'
            variants={fadeInUp}
          >
            จังหวัดสงขลา 25 ตำบล
          </motion.div>

          <motion.div
            className='grid md:grid-cols-2 gap-10 mt-10 items-start'
            variants={staggerChildren}
          >
            {/* Map */}
            <motion.div
              className='rounded-2xl overflow-hidden shadow-lg'
              variants={fadeInLeft}
              whileHover={{
                scale: 1.02,
                boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
              }}
              transition={{ duration: 0.3 }}
            >
              <img
                src='/home/songkla-area.png'
                className='w-full h-full object-cover'
                alt='แผนที่พื้นที่เป้าหมายจังหวัดสงขลา'
              />
            </motion.div>

            {/* Table */}
            <motion.div
              className='overflow-x-auto shadow-lg rounded-2xl'
              variants={fadeInRight}
            >
              <table className='w-full border-collapse'>
                <thead>
                  <tr className='bg-[var(--primary)] text-white text-left'>
                    <th className='p-3'>Model</th>
                    <th className='p-3'>Subdistricts (ตำบล)</th>
                  </tr>
                </thead>
                <tbody className='text-sm md:text-base'>
                  {/* Model 1 */}
                  <motion.tr
                    className='odd:bg-slate-50'
                    whileHover={{ backgroundColor: '#f1f5f9' }}
                    transition={{ duration: 0.2 }}
                  >
                    <td className='p-3 font-semibold'>Model 1</td>
                    <td className='p-3'>
                      <ul className='list-disc list-inside space-y-1'>
                        <li>ต.เชิงแส</li>
                      </ul>
                    </td>
                  </motion.tr>

                  {/* Model 2 */}
                  <motion.tr
                    className='odd:bg-slate-50'
                    whileHover={{ backgroundColor: '#f1f5f9' }}
                    transition={{ duration: 0.2 }}
                  >
                    <td className='p-3 font-semibold align-top'>Model 2</td>
                    <td className='p-3'>
                      <ul className='list-disc list-inside space-y-1'>
                        <li>ต.บ้านใหม่</li>
                        <li>ต.รำแดง</li>
                        <li>ต.รัตภูมิ</li>
                        <li>ต.เขาพระ</li>
                        <li>ต.ฉลุง</li>
                        <li>ต.คลองหลา</li>
                        <li>ต.ทุ่งตำเสา</li>
                        <li>ต.ทุ่งลาน</li>
                        <li>ต.สะท้อน</li>
                        <li>ต.ทับช้าง</li>
                      </ul>
                    </td>
                  </motion.tr>

                  {/* Model 3 */}
                  <motion.tr
                    className='odd:bg-slate-50'
                    whileHover={{ backgroundColor: '#f1f5f9' }}
                    transition={{ duration: 0.2 }}
                  >
                    <td className='p-3 font-semibold align-top'>Model 3</td>
                    <td className='p-3'>
                      <ul className='list-disc list-inside space-y-1'>
                        <li>ต.ตะเครียะ</li>
                        <li>ต.โรง</li>
                        <li>ต.บ่อตรุ</li>
                        <li>ต.กระแสสินธุ์</li>
                        <li>ต.คลองรี</li>
                        <li>ต.ท่าหิน</li>
                        <li>ต.ควนโส</li>
                        <li>ต.ท่าช้าง</li>
                        <li>ต.ควนลัง</li>
                        <li>ต.โคกม่วง</li>
                        <li>ต.บ้านนา</li>
                      </ul>
                    </td>
                  </motion.tr>
                </tbody>
              </table>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* map area pattalung */}
      <motion.section
        className='md:py-20 py-10 mt-10'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerChildren}
      >
        <div className='container-x'>
          <motion.div
            className='text-center mb-2 text-black/60'
            variants={fadeInUp}
          >
            พื้นที่เป้าหมาย
          </motion.div>
          <motion.div
            className='text-4xl md:text-5xl text-center text-[var(--primary)] font-bold'
            variants={fadeInUp}
          >
            จังหวัดพัทลุง จำนวน 13 ตำบล
          </motion.div>

          <motion.div
            className='grid md:grid-cols-2 gap-10 mt-10 items-start'
            variants={staggerChildren}
          >
            {/* Map */}
            <motion.div
              className='rounded-2xl overflow-hidden shadow-lg'
              variants={fadeInLeft}
              whileHover={{
                scale: 1.02,
                boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
              }}
              transition={{ duration: 0.3 }}
            >
              <img
                src='/home/pattalung-area.png'
                className='w-full h-full object-cover'
                alt='แผนที่พื้นที่เป้าหมายจังหวัดพัทลุง'
              />
            </motion.div>

            {/* Table */}
            <motion.div
              className='overflow-x-auto shadow-lg rounded-2xl'
              variants={fadeInRight}
            >
              <table className='w-full border-collapse'>
                <thead>
                  <tr className='bg-[var(--primary)] text-white text-left'>
                    <th className='p-3'>Model</th>
                    <th className='p-3'>Subdistricts (ตำบล)</th>
                  </tr>
                </thead>
                <tbody className='text-sm md:text-base'>
                  {/* Model 1 */}
                  <motion.tr
                    className='odd:bg-slate-50'
                    whileHover={{ backgroundColor: '#f1f5f9' }}
                    transition={{ duration: 0.2 }}
                  >
                    <td className='p-3 font-semibold'>Model 1</td>
                    <td className='p-3'>
                      ตำบลมะพร้าว <br />
                      <span className='text-xs text-slate-500'>
                        (พื้นที่ที่ต้องดำเนินการอย่างเข้มข้น จำนวน 3 ตำบล)
                      </span>
                    </td>
                  </motion.tr>

                  {/* Model 2 */}
                  <motion.tr
                    className='odd:bg-slate-50'
                    whileHover={{ backgroundColor: '#f1f5f9' }}
                    transition={{ duration: 0.2 }}
                  >
                    <td className='p-3 font-semibold align-top'>Model 2</td>
                    <td className='p-3 space-y-2'>
                      <div>
                        ตำบลเขาชัยสน <br />
                        <span className='text-xs text-slate-500'>
                          (พื้นที่ที่ต้องดำเนินการอย่างเข้มข้น จำนวน 3 ตำบล)
                        </span>
                      </div>
                      <div>
                        ตำบลท่าแค <br />
                        <span className='text-xs text-slate-500'>
                          (พื้นที่ที่ต้องดำเนินการอย่างเข้มข้น จำนวน 3 ตำบล)
                        </span>
                      </div>
                    </td>
                  </motion.tr>

                  {/* Model 3 */}
                  <motion.tr
                    className='odd:bg-slate-50'
                    whileHover={{ backgroundColor: '#f1f5f9' }}
                    transition={{ duration: 0.2 }}
                  >
                    <td className='p-3 font-semibold align-top'>Model 3</td>
                    <td className='p-3'>
                      <ul className='list-disc list-inside space-y-1'>
                        <li>ตำบลพนางตุง</li>
                        <li>ตำบลร่มเมือง</li>
                        <li>ตำบลปันแต</li>
                        <li>ตำบลตำนาน</li>
                        <li>ตำบลโตนดด้วน</li>
                        <li>ตำบลชัยบุรี</li>
                        <li>ตำบลแหลมโตนด</li>
                        <li>ตำบลลำปำ</li>
                        <li>ตำบลมะกอกเหนือ</li>
                        <li>ตำบลอ่างทอง</li>
                      </ul>
                    </td>
                  </motion.tr>
                </tbody>
              </table>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* divider */}
      <motion.div
        className='mt-10 h-1'
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {' '}
      </motion.div>

      <section className='max-w-3xl mx-auto my-12 px-4'>
        <h2 className='text-3xl font-bold text-gray-800 mb-4'>
          ขั้นตอนการดำเนินงานการจัดการน้ำระดับตำบล (น้ำตำบล)
        </h2>
        <p className='text-gray-600 mb-6'>
          กระบวนการดำเนินงานของทีมกลางแบ่งออกเป็น 4 จังหวะหลัก
          ที่มุ่งเน้นการพัฒนา คน-ข้อมูล-แผนน้ำตำบล-รูปธรรม โดยมีขั้นตอนดังนี้:
        </p>
        <ul className='space-y-4 list-disc list-inside text-gray-700'>
          <li className='transition-colors'>การพัฒนาคน</li>
          <li className='transition-colors'>การพัฒนาข้อมูล</li>
          <li className='transition-colors'>การพัฒนาแผนน้ำตำบลแบบมีส่วนร่วม</li>
          <li className='transition-colors'>
            สร้างรูปธรรม: พัฒนาอาชีพสร้างรายได้, แก้จน, ลดผลกระทบจากภัยพิบัติ
          </li>
        </ul>
      </section>

      <section className='max-w-3xl mx-auto my-12 px-4'>
        <h2 className='text-3xl font-bold text-gray-800 mb-6'>
          แผนปฏิบัติการการจัดการน้ำระดับตำบล
        </h2>

        <ul className='space-y-6 text-gray-700'>
          <li>
            <span className='font-semibold text-gray-900'>เดือนที่ 1:</span>{' '}
            เตรียมงานเพื่อเก็บข้อมูลทั่วไปและข้อมูลพื้นที่
          </li>
          <li>
            <span className='font-semibold text-gray-900'>เดือนที่ 2:</span>{' '}
            เก็บข้อมูลโดยใช้เครื่องมือ GIS เพื่อวิเคราะห์แนวทางการแก้ปัญหา
          </li>
          <li>
            <span className='font-semibold text-gray-900'>เดือนที่ 3:</span>
            <ul className='list-disc list-inside mt-2 ml-4 space-y-1 text-gray-700'>
              <li>
                จัดทำแผนโครงการพัฒนาเพื่อแก้ปัญหาอย่างมีส่วนร่วม
                เตรียมพร้อมให้กับหน่วยงานฟังก์ชั่น ในการกรอก TWP
              </li>
              <li>ทดลองกิจกรรม การแก้ปัญหาด้านน้ำ และอาชีพ โดยเฉพาะ MODEL 1</li>
            </ul>
          </li>
          <li>
            <span className='font-semibold text-gray-900'>เดือนที่ 4-6:</span>{' '}
            ทดลองกิจกรรม การแก้ปัญหาด้านน้ำ และอาชีพ โดยเฉพาะ MODEL 2
          </li>
          <li>
            <span className='font-semibold text-gray-900'>เดือนที่ 7-9:</span>{' '}
            ทดลองกิจกรรม การแก้ปัญหาด้านน้ำ และอาชีพ โดยเฉพาะ MODEL 3
          </li>
        </ul>
      </section>
    </main>
  )
}
