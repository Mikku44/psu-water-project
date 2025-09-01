'use client'
import BreadcrumbChev from '@/components/Breadcrumb'

import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  User,
  MessageCircle,
  CheckCircle,
  AlertCircle
} from 'lucide-react'
import { useState } from 'react'
import { submitContact } from '../repositories/contacts'

export default function ContactPage () {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    detail: '',
    contact_type: 'general'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<{
    type: 'success' | 'error'
    text: string
  } | null>(null)

  const items = [{ href: '#', label: 'ติดต่อ/ประสานงาน' }]

  // Auto-hide messages after 5 seconds
  useState(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(null), 5000)
      return () => clearTimeout(timer)
    }
  })

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await submitContact(formData)

      setMessage({
        type: 'success',
        text: 'ข้อความของคุณถูกส่งเรียบร้อยแล้ว เราจะติดต่อกลับในเร็วๆ นี้'
      })
      setFormData({
        name: '',
        email: '',
        title: '',
        detail: '',
        contact_type: 'general'
      })
    } catch (error) {
      console.error('Error submitting form:', error)
      setMessage({
        type: 'error',
        text: 'เกิดข้อผิดพลาดในการส่งข้อความ กรุณาลองใหม่อีกครั้ง'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactTypes = [
    { value: 'general', label: 'สอบถามทั่วไป' },
    { value: 'research', label: 'งานวิจัย' },
    { value: 'collaboration', label: 'ความร่วมมือ' },
    { value: 'technical', label: 'ปัญหาทางเทคนิค' },
    { value: 'other', label: 'อื่นๆ' }
  ]

  return (
    <div className='min-h-screen bg-white'>
      <style jsx>{`
        :root {
          --color-primary: #0047a1;
          --color-secondary: #6bba22;
          --color-secondary-light: #fdeebe;
          --color-success: #28a745;
        }
      `}</style>

      <section className='bg-gradient-to-r from-slate-300 to-slate-50 min-h-[500px] max-h-[500px] relative overflow-hidden'>
        <BreadcrumbChev items={items} className='container-x pt-10' />

        <svg
          xmlns='http://www.w3.org/2000/svg'
          width={24}
          height={24}
          className='size-[400px] absolute text-slate-400 opacity-35 right-0'
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
          <div
            className='text-5xl font-bold'
            style={{ color: 'var(--color-primary)' }}
          >
            ติดต่อ/ประสานงาน
          </div>
          <div className='text-black/80 mt-4'>
            ติดต่อหรือประสานงานทางคณะทีมวิจัย
          </div>
        </div>
      </section>

      <div className='max-w-6xl mx-auto px-4 py-12'>
        {/* Success/Error Message */}
        {message && (
          <div className='fixed top-6 left-1/2 transform -translate-x-1/2 z-50'>
            <div
              className={`flex items-center max-w-md px-4 py-3 rounded-lg shadow-lg  transition-all duration-300
        ${
          message.type === 'success'
            ? 'bg-white border-green-400'
            : 'bg-white border-red-400'
        }`}
            >
              {message.type === 'success' ? (
                <CheckCircle className='w-5 h-5 text-green-600 mr-3' />
              ) : (
                <AlertCircle className='w-5 h-5 text-red-600 mr-3' />
              )}
              <p
                className={`flex-1 text-sm ${
                  message.type === 'success' ? 'text-green-800' : 'text-red-800'
                }`}
              >
                {message.text}
              </p>
              <button
                onClick={() => setMessage(null)}
                className='ml-3 text-gray-400 hover:text-gray-600'
              >
                ×
              </button>
            </div>
          </div>
        )}

        <div className='grid lg:grid-cols-3 gap-12'>
          {/* Contact Information */}
          <div className='lg:col-span-1 space-y-8'>
            <div>
              <h2
                className='text-2xl font-bold mb-6'
                style={{ color: 'var(--color-primary)' }}
              >
                ข้อมูลการติดต่อ
              </h2>

              <div className='space-y-6'>
                {/* Address */}
                <div className='flex items-start space-x-4'>
                  <div
                    className='w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0'
                    style={{ backgroundColor: 'var(--color-primary)' }}
                  >
                    <MapPin
                      className='w-5 h-5'
                      style={{ color: 'var(--color-secondary)' }}
                    />
                  </div>
                  <div>
                    <h3 className='font-semibold text-gray-900 mb-1'>
                      ที่อยู่
                    </h3>
                    <p className='text-gray-600 leading-relaxed'>
                      จังหวัดสงขลา
                      <br />
                      ประเทศไทย
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className='flex items-start space-x-4'>
                  <div
                    className='w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0'
                    style={{ backgroundColor: 'var(--color-primary)' }}
                  >
                    <Phone
                      className='w-5 h-5'
                      style={{ color: 'var(--color-secondary)' }}
                    />
                  </div>
                  <div>
                    <h3 className='font-semibold text-gray-900 mb-1'>
                      โทรศัพท์
                    </h3>
                    <p className='text-gray-600'>065 676 2309</p>
                  </div>
                </div>

                {/* Email */}
                <div className='flex items-start space-x-4'>
                  <div
                    className='w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0'
                    style={{ backgroundColor: 'var(--color-primary)' }}
                  >
                    <Mail
                      className='w-5 h-5'
                      style={{ color: 'var(--color-secondary)' }}
                    />
                  </div>
                  <div>
                    <h3 className='font-semibold text-gray-900 mb-1'>อีเมล</h3>
                    <p className='text-gray-600'>info@research.ac.th</p>
                    <p className='text-gray-600'>contact@research.ac.th</p>
                  </div>
                </div>

                {/* Office Hours */}
                <div className='flex items-start space-x-4'>
                  <div
                    className='w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0'
                    style={{ backgroundColor: 'var(--color-primary)' }}
                  >
                    <Clock
                      className='w-5 h-5'
                      style={{ color: 'var(--color-secondary)' }}
                    />
                  </div>
                  <div>
                    <h3 className='font-semibold text-gray-900 mb-1'>
                      เวลาทำการ
                    </h3>
                    <p className='text-gray-600'>
                      จันทร์ - ศุกร์: 08:30 - 16:30
                    </p>
                    <p className='text-gray-600'>
                      ปิดวันเสาร์-อาทิตย์ และวันหยุดราชการ
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Cards
            <div>
              <h3 className='text-lg font-semibold text-gray-900 mb-4'>
                ช่องทางการติดต่อ
              </h3>
              <div className='space-y-3'>
                <div className='p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer'>
                  <div className='flex items-center space-x-3'>
                    <User className='w-5 h-5 text-gray-500' />
                    <div>
                      <p className='font-medium text-gray-900'>สอบถามทั่วไป</p>
                      <p className='text-sm text-gray-600'>
                        สำหรับคำถามและข้อมูลทั่วไป
                      </p>
                    </div>
                  </div>
                </div>

                <div className='p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer'>
                  <div className='flex items-center space-x-3'>
                    <MessageCircle className='w-5 h-5 text-gray-500' />
                    <div>
                      <p className='font-medium text-gray-900'>
                        งานวิจัยและความร่วมมือ
                      </p>
                      <p className='text-sm text-gray-600'>
                        สำหรับการประสานงานด้านวิจัย
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>

          {/* Contact Form */}
          <div className='lg:col-span-2'>
            <h2
              className='text-2xl font-bold mb-6'
              style={{ color: 'var(--color-primary)' }}
            >
              ส่งข้อความถึงเรา
            </h2>

            <form
              onSubmit={handleSubmit}
              className='space-y-6 bg-gray-50 p-6 rounded-xl'
            >
              <div className='grid sm:grid-cols-2 gap-4'>
                <div>
                  <label
                    htmlFor='name'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    ชื่อ-นามสกุล *
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-colors'
                    placeholder='กรุณากรอกชื่อ-นามสกุล'
                  />
                </div>

                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    อีเมล *
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-colors'
                    placeholder='example@email.com'
                  />
                </div>
              </div>

              <div className='grid sm:grid-cols-2 gap-4'>
                <div>
                  <label
                    htmlFor='contact_type'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    ประเภทการติดต่อ *
                  </label>
                  <select
                    id='contact_type'
                    name='contact_type'
                    value={formData.contact_type}
                    onChange={handleInputChange}
                    required
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-colors'
                  >
                    {contactTypes.map(type => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor='title'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    หัวข้อ *
                  </label>
                  <input
                    type='text'
                    id='title'
                    name='title'
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-colors'
                    placeholder='เรื่องที่ต้องการติดต่อ'
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor='detail'
                  className='block text-sm font-medium text-gray-700 mb-2'
                >
                  รายละเอียด *
                </label>
                <textarea
                  id='detail'
                  name='detail'
                  value={formData.detail}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-colors resize-none'
                  placeholder='กรุณาระบุรายละเอียดที่ต้องการติดต่อ...'
                />
              </div>

              <button
                type='submit'
                disabled={isSubmitting}
                className='w-full text-white py-3 px-6 rounded-lg hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center space-x-2 font-medium'
                style={{ backgroundColor: 'var(--color-primary)' }}
              >
                {isSubmitting ? (
                  <>
                    <div className='w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin' />
                    <span>กำลังส่ง...</span>
                  </>
                ) : (
                  <>
                    <Send className='w-5 h-5' />
                    <span>ส่งข้อความ</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className='mt-16'>
          <h2
            className='text-2xl font-bold mb-6'
            style={{ color: 'var(--color-primary)' }}
          >
            ที่ตั้ง
          </h2>
          <div className='bg-gradient-to-br relative overflow-hidden from-slate-100 to-slate-50 rounded-xl h-64 flex items-center justify-center border border-gray-200'>
            <div className='text-center'>
              <MapPin className='w-16 h-16 text-gray-400 mx-auto mb-4' />
              <p className='text-gray-500 text-lg font-medium'>
                แผนที่แบบโต้ตอบจะแสดงที่นี่
              </p>
              <p className='text-sm text-gray-400 mt-2'>
                จังหวัดสงขลา, ประเทศไทย
              </p>
            </div>

            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63333.05388707221!2d100.59844354999998!3d7.2047584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304d3323cbb09939%3A0xeb807b7b87c693f1!2z4LmA4LiX4Lio4Lia4Liy4Lil4LiZ4LiE4Lij4Liq4LiH4LiC4Lil4LiyIOC4reC4s-C5gOC4oOC4reC5gOC4oeC4t-C4reC4h-C4quC4h-C4guC4peC4siDguKrguIfguILguKXguLI!5e0!3m2!1sth!2sth!4v1756720153140!5m2!1sth!2sth'
            
              className='w-full h-full absolute left-0'
              loading='lazy'
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}
