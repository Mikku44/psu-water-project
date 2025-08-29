'use client'

import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { useState } from 'react'
import { HiHome, HiUserGroup, HiChatAlt, HiMenu } from 'react-icons/hi'

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '@/components/ui/drawer'

export default function NavigatorBar () {
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  // Menu items data
  const menuItems = [
    { id: 1, href: '/', label: 'หน้าแรก', icon: <HiHome /> },
    { id: 2, href: '/board', label: 'ผู้บริหารโครงการ', icon: <HiUserGroup /> },
    { id: 3, href: '/public-relations', label: 'ประชาสัมพันธ์', icon: <HiChatAlt /> }
  ]

  return (
    <nav className='border-b border-gray-500/20 z-[99]'>
      <div className='container-x flex justify-between items-center'>
        {/* Logo */}
        <Link href='/' className='flex gap-2 items-center'>
          <div className='w-[130px] h-[80px] flex items-center justify-center overflow-hidden'>
            <img
              src='/psu-logo-th.png'
              className='w-full h-full object-cover'
              alt='psu logo'
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className='hidden lg:flex gap-6 items-center'>
          {menuItems.map(item => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.id}
                href={item.href}
                className={`flex items-center gap-2 px-3 py-2 rounded-md transition ${
                  isActive
                    ? 'border-b-2 rounded-none border-blue-500  font-semibold'
                    : 'text-gray-700 hover:text-blue-600 '
                }`}
              >
                {item.icon} {item.label}
              </Link>
            )
          })}
        </div>

        {/* Mobile Menu (Drawer) */}
        <div className='lg:hidden'>
          <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger className='flex gap-2 items-center duration-200 hover:bg-slate-100/20 rounded-md p-3'>
              <HiMenu /> เมนู
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>เมนูนำทาง</DrawerTitle>
                <DrawerDescription>
                  {menuItems.map(item => {
                    const isActive = pathname === item.href
                    return (
                      <button
                        key={item.id}
                        className={`w-full px-3 py-2 text-lg flex items-center gap-5 rounded-md transition ${
                          isActive
                            ? 'border-b-2 rounded-none border-blue-500  font-semibold'
                            : 'hover:opacity-90 hover:bg-slate-200/20'
                        }`}
                        onClick={() => {
                          router.push(item.href)
                          setOpen(false)
                        }}
                      >
                        {item.icon} {item.label}
                      </button>
                    )
                  })}
                </DrawerDescription>
              </DrawerHeader>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </nav>
  )
}
