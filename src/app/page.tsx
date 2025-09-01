
import CardProvider from '@/components/CardProvider'
import NewsList from '@/components/NewsList'
import Link from 'next/link'
import { BsCaretRightFill } from 'react-icons/bs'
import { FaCircleChevronRight } from 'react-icons/fa6'
import * as motion from 'motion/react-client'
import { EmblaCarousel } from '@/components/carousel'

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
      <section className="w-full h-full pb-5">
        <EmblaCarousel />
      </section>

      {/* news section */}
      <motion.section
        className='container-x grid md:grid-cols-3 gap-5'
        initial='hidden'
        animate='visible'
        variants={staggerChildren}
      >
        <motion.div className='md:col-span-2' 
        whileInView={fadeInLeft}>
          <CardProvider />
        </motion.div>
        <motion.div animate={fadeInRight}>
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

    </main>
  )
}
