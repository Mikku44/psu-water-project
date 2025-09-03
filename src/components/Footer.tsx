"use client"

import Link from "next/link"
import { FaFacebook } from "react-icons/fa6"
import { HiChatAlt, HiHome, HiPhone } from "react-icons/hi"
import { MdContactSupport } from "react-icons/md"
import { TbChartInfographic } from "react-icons/tb"
import Tiktok from "./icons/tiktok"


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


export default function Footer() {
  return (
    <section className="bg-slate-50 pt-10 flex flex-col">
      <div className="container-x flex md:flex-row flex-col gap-10 justify-between w-full py-5">
        {/* col 1 : Logo */}
        <div>
          <Link href="/" className="flex gap-2 items-center grayscale-100">
            <div className="w-[130px] h-[80px] flex items-center justify-center overflow-hidden">
              <img
                src="/psu-logo-th.png"
                className="w-full h-full object-cover"
                alt="psu logo"
              />
            </div>
          </Link>
        </div>

        {/* col 2 : Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {menuItems.map((item) => (
            <div key={item.id}>
              {item.type === "list" ? (
                <Link href={item.href} className="text-sm text-slate-800 hover:text-[var(--color-secondary)]">
                  {item.label}
                </Link>
              ) : (
                <div>
                  <Link
                    href={item.href}
                    className="text-sm font-semibold text-slate-800 hover:text-[var(--color-secondary)]"
                  >
                    {item.label}
                  </Link>
                  <ul className="mt-2 space-y-1 text-sm">
                    {item.items?.map((sub) => (
                      <li key={sub.href}>
                        <Link
                          href={sub.href}
                          className="text-slate-600 hover:text-[var(--color-secondary)]"
                        >
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom row */}
      <div className="w-full border-t border-slate-200 py-4">
        <div className="container-x flex flex-col md:flex-row text-slate-600 justify-between items-center gap-3">
          <div className="flex gap-5 items-center">
            <Link
              href="https://www.facebook.com/profile.php?id=61578115720469"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[var(--color-secondary)]"
            >
              <FaFacebook size={18} />
            </Link>
            <Link
              href="https://www.tiktok.com/@phaennam68"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[var(--color-secondary)]"
            >
              <Tiktok size={18}  className="hover:text-[var(--color-secondary)]" />
            </Link>
            <Link
              href="tel:0656762309"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[var(--color-secondary)]"
            >
              <HiPhone size={18} />
            </Link>
          </div>
          <div className="text-sm">© 2025 All Rights Reserved</div>
        </div>
      </div>
    </section>
  )
}
