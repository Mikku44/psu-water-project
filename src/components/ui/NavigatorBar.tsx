'use client'

import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { useState } from 'react'
import { HiHome,  HiChatAlt, HiMenu, HiPhone } from 'react-icons/hi'
import { MdContactSupport } from 'react-icons/md'
import { TbChartInfographic } from 'react-icons/tb'

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '@/components/ui/drawer'
import { FaFacebook } from 'react-icons/fa6'
import { NavigationMenu } from './navigation-menu'
import DropdownMenu from '../Dropdown'
import CollapseMenu from '../CollapseMenu'

export default function NavigatorBar () {
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  // Menu items data
  const menuItems = [
    { id: 1, type: 'list', href: '/', label: 'หน้าแรก', icon: <HiHome /> },
    {
      id: 2,
      items: [
        { href: '/project-info#south-plan', label: 'แผนงานน้ำภาคใต้' },
        { href: '/project-info#province-plan', label: 'แผนงานน้ำจังหวัด' },
        { href: '/project-info#subdistrict-plan', label: 'แผนงานน้ำตำบล' },
        { href: '/board', label: 'คณะทีมวิจัย' }
      ],
      type: 'dropdown',
      href: '/project-info',
      label: 'รู้จักโครงการ',
      icon: <TbChartInfographic />
    },
    // {
    //   id: 3,
    //   type: 'list',
    //   href: '/board',
    //   label: 'คณะทีมวิจัย',
    //   icon: <HiUserGroup />
    // },
    {
      id: 4,

      type: 'list',
      href: '/public-relations',
      label: 'ข้อมูลข่าวสารประชาสัมพันธ์ ',
      icon: <HiChatAlt />
    },
    {
      id: 5,

      type: 'list',
      href: '/contact',
      label: 'ติดต่อ/ประสานงาน',
      icon: <MdContactSupport />
    }
  ]

  return (
    <NavigationMenu className='border-b border-gray-500/20 sticky top-0 bg-white flex max-w-full w-full flex-col z-[999]'>
      <div className='w-full p-2 text-white bg-[var(--color-primary)]'>
        <div className='max-w-7xl px-4 flex mx-auto w-full gap-5 justify-end'>
          <Link
            href='https://www.facebook.com/profile.php?id=61578115720469'
            target='_blank'
            rel='noreferal'
          >
            <div className='flex items-center gap-2 text-sm'>
              <div className='rounded-full p-1 bg-white/80 size-[22px] flex items-center justify-center'>
                <FaFacebook className='text-[var(--primary)] text-[14px]' />
              </div>
              <span className='text-sm'>แผนน้ำภาคใต้ วช.</span>
            </div>
          </Link>
          <Link href='tel:065 676 2309' target='_blank' rel='noreferal'>
            <div className='flex items-center gap-2 text-sm'>
              <div className='rounded-full p-1 bg-white/80 size-[22px] flex items-center justify-center'>
                <HiPhone className='text-[var(--primary)] text-[14px]' />
              </div>
              <span className='text-sm'>065 676 2309</span>
            </div>
          </Link>
        </div>
      </div>
      <div className='container-x flex justify-between items-center max-w-full w-full'>
        {/* Logo */}
        <Link href='/' className='flex gap-2 items-center'>
          <div className='size-[70px] p-2 flex items-center justify-center overflow-hidden'>
            <img src='/icon.png' className=' object-cover' alt='psu logo' />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className='hidden lg:flex gap-6 items-center '>
          {menuItems.map(item => {
            const isActive = pathname === item.href
            if (item.type === 'dropdown')
              return (
                <DropdownMenu
                  key={item.id}
                  icon={item.icon}
                  isActive={isActive}
                  label={item.label}
                  items={item.items as { href: string; label: string }[]}
                />
              )
            return (
              <Link
                key={item.id}
                href={item.href}
                className={`flex items-center gap-2 px-3 py-2 rounded-md transition ${
                  isActive
                    ? 'border-b-2  rounded-none border-[var(--color-secondary)] text-[var(--color-secondary)]  font-semibold'
                    : 'text-gray-700 hover:text-[var(--color-secondary)] '
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
                    if (item.type === 'dropdown')
                      return (
                        <CollapseMenu
                          key={item.id}
                          icon={item.icon}
                          isActive={isActive}
                          label={item.label}
                          items={
                            item.items as { href: string; label: string }[]
                          }
                        />
                      )
                    return (
                      <button
                        key={item.id}
                        className={`w-full px-3 py-2 text-lg flex items-center gap-5 rounded-md transition ${
                          isActive
                            ? 'bg-slate-200/20 rounded-sm text-[var(--color-secondary)]  font-semibold'
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
    </NavigationMenu>
  )
}
