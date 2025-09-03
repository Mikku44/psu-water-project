import CardProvider from '@/components/CardProvider'
import NewsList from '@/components/NewsList'
import Link from 'next/link'
import { BsCaretRightFill } from 'react-icons/bs'
import { FaCircleChevronRight } from 'react-icons/fa6'
import * as motion from 'motion/react-client'
import { EmblaCarousel } from '@/components/carousel'

const menuList = [
  {
    href: '/project-info',
    label: 'ข้อมูลโครงการ',
    image : '/icons/action-plan.png'
  },
  {
    href: '/board',
    label: 'คณะทีมทำงาน',
    image : '/icons/project.png'
  },
  {
    href: '/contact',
    label: 'ติดต่อ/ประสานงาน',
    image : '/icons/advertisement.png'
  },
]

const orgList = [
  { id: 1, img: 'aw.png' },
  { id: 2, img: 'nrct.jpg' },
  { id: 3, img: 'sksw.png' },
  { id: 4, img: 'swk.png' },
  { id: 5, img: 'psu-logo-th.png' }
]

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
    <main className='min-h-screen w-full '>
      {/* slider carousel */}
      <section className='w-full h-full md:min-h-[80vh] pb-5'>
        <EmblaCarousel />
      </section>

      {/* news section */}
      <motion.div
        className='text-3xl container-x mx-auto pb-5 md:text-4xl md:min-w-[400px] text-[var(--primary)] font-bold'
        whileInView={fadeInLeft}
      >
        ข่าวประชาสัมพันธ์
      </motion.div>
      <motion.section
        className='container-x grid md:grid-cols-3 gap-5'
        initial='hidden'
        animate='visible'
        variants={staggerChildren}
      >
        <motion.div className='md:col-span-2' whileInView={fadeInLeft}>
          <CardProvider />
        </motion.div>
        <motion.div animate={fadeInRight}>
          <NewsList />
        </motion.div>
      </motion.section>

      {/* menu service page */}
      <section className=' bg-linear-240 from-[var(--color-primary)] to-[var(--color-info)] py-10 mt-10'>
        <motion.div
          className='text-3xl  container-x mx-auto pb-5 md:text-3xl md:min-w-[400px] text-white font-bold'
          whileInView={fadeInLeft}
        >
          เมนูการดำเนินงาน
        </motion.div>
        <section className='container-x mx-auto py-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {menuList?.map(item => (
            <Link
            href={item.href}
              key={item?.label}
              className='bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.03] transition-all duration-300 overflow-hidden cursor-pointer'
            >
              <div className='w-full h-40 flex justify-center items-center'>
                <img
                  src={item.image}
                  alt={item?.label}
                  className='max-w-[120px]'
                />
              </div>
              <div className='p-4 text-center font-medium text-gray-800'>
                {item?.label}
              </div>
            </Link>
          ))}
        </section>
      </section>

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
          whileInView={fadeInLeft}
        >
          เกี่ยวกับโครงการ
        </motion.div>
        <motion.div
          className='opacity-90 md:max-w-[40vw]'
          animate={fadeInRight}
        >
          โครงการ
          การจัดทำแผนหลักการบริหารจัดการทรัพยากรน้ำแบบบูรณาการระดับจังหวัด
          และการขยายผลการเพิ่มประสิทธิภาพการบริหารจัดการน้ำแบบมีส่วนร่วม
          จังหวัดพัทลุง จังหวัดสงขลา-พัทลุง
          <Link
            href='/project-info'
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
          whileInView={fadeInLeft}
        >
          วัตถุประสงค์โครงการ
        </motion.div>
        <motion.div
          className='opacity-90 md:max-w-[40vw]'
          animate={fadeInRight}
        >
          <motion.ul className='space-y-2' variants={staggerChildren}>
            {[
              '1.เพื่อสนับสนุนแผนปฎิบัติการของโครงการจังหวัดภาคใต้ให้บรรลุเป้าหมาย',
              '2. เพื่อติดตามความก้าวหน้าและสนับสนุนการทำงานของแผนงานการจัดการน้ำ ใน จังหวัดสงขลาและจังหวัดพัทลุง',
              '3. เพื่อทบทวนรายงานและให้ความเห็นรายงานของแผนการจัดการน้ำ จังหวัด',
              '4. เพื่อสื่อสารและประชาสัมพันธ์งานการจัดการน้ำ ในภาคใต้'
            ].map((item, index) => (
              <motion.li key={index} whileInView={fadeInUp}>
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
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
            animate={fadeInUp}
          >
            หลักคิดการจัดการน้ำ
          </motion.div>
          <motion.div
            className='text-4xl md:text-5xl text-center md:min-w-[400px] text-[var(--primary)] font-bold'
            animate={fadeInUp}
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
            animate={scaleIn}
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
            animate={fadeInUp}
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
            animate={scaleIn}
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
            animate={fadeInUp}
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
            animate={scaleIn}
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

      {/* organization */}
      <div className='my-20 text-white'>.</div>
      <section
        className='relative mt-10 bg-[var(--primary)] 
      bg-[url("/bg/purple.avif")] bg-cover 
       w-full h-[50vh]'
      >
        <div className='absolute flex justify-center w-full top-[-30%]'>
          <div className=' bg-white  md:w-[50vw] w-[90vw] shadow-xl  border-gray-100/60 rounded-xl py-5'>
            <div className='mx-auto text-center py-5'>
              <div className=' text-sm text-gray-500'>
                โครงการดำเนินงานภายใต้
              </div>
              <div className=' md:text-3xl text-2xl md:min-w-[400px] text-[var(--color-secondary)] font-bold'>
                หน่วยงานที่เกี่ยวข้อง
              </div>
            </div>
            <div className='w-full px-4 flex overflow-auto gap-10 justify-center py-5 flex-wrap '>
              {orgList.map(item => (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: -10
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0
                  }}
                  key={item?.id}
                >
                  <img
                    src={`/organization/${item.img}`}
                    className='md:h-[100px] h-[80px]'
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
