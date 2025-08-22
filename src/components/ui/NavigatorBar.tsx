'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { HiHome, HiUserGroup, HiChatAlt, HiMenu } from 'react-icons/hi'

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '@/components/ui/drawer'

export default function NavigatorBar () {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  // Menu items data
  const menuItems = [
    { id: 1, href: '/', label: 'หน้าแรก', icon: <HiHome /> },
    { id: 2, href: '/board', label: 'ผู้บริหารโครงการ', icon: <HiUserGroup/> },
    {
      id: 3,
      href: '/public-relations',
      label: 'ประชาสัมพันธ์',
      icon: <HiChatAlt/>
    }
  ]

  return (
    <nav
      className='border-b border-gray-500/20 z-[99]'
      // background='white'
      // width='100%'
      // padding='4'
      // boxShadow='md'
      color='black'
    >
      <div className='container-x flex justify-between items-center '>
        <Link href='/' className='flex gap-2 items-center'>
          <div className='w-[130px] h-[80px] flex items-center justify-center  overflow-hidden'>
            <img
              src='/psu-logo-th.png'
              className='w-full h-full object-cover'
              alt='psu logo'
            />
          </div>
          {/* แผนน้ำ ภาคใต้{' '} */}
        </Link>
        <Drawer 
        // open={open}
        >
          <DrawerTrigger
          // onClick={()=> setOpen(true)}
          className='flex gap-2 items-center duration-200 hover:bg-slate-100/20 rounded-md p-3'><HiMenu /> เมนู</DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>เมนูนำทาง</DrawerTitle>
              <DrawerDescription>
               {menuItems.map(item => (
                      <button
        
                        key={item.id}
                        className='w-full hover:opacity-90 hover:bg-slate-200/20 px-3 py-2 text-lg flex items-center gap-5'
                        onClick={() => {
                          console.log(`Selected: ${item.label}`)
                          router.push(item.href)
                          // setOpen(false)
                        }}
                      >
                        {item.icon} {item.label}
                      </button>
                    ))}
              </DrawerDescription>
            </DrawerHeader>
          </DrawerContent>
        </Drawer>
      </div>
    </nav>
  )
}
