import type { Metadata } from 'next'
import { Geist, Geist_Mono, Noto_Sans_Thai } from 'next/font/google'

import './globals.css'
import NavigatorBar from '@/components/ui/NavigatorBar'
import Footer from '@/components/Footer'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})
const notoSans = Noto_Sans_Thai({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'น้ำมั่นคง ไม่ท่วม ไม่แล้ง ใน 10 จังหวัดภาคใต้ - PSU',
  description:
    'โครงการ การขับเคลื่อนการดำเนินงานภายใต้แผนงานน้ำมั่นคง ไม่ท่วม ไม่แล้ง ใน 10 จังหวัดภาคใต้ (สงขลา-พัทลุง) by PSU'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html suppressHydrationWarning={false} lang='th'>
      <body
        className={`${notoSans.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavigatorBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
