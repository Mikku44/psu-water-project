"use client"

import { useState } from "react"
import Link from "next/link"

type CollapseMenuProps = {
  label: string
  icon?: React.ReactNode
  isActive?: boolean
  items: { href: string; label: string }[]
}

export default function CollapseMenu({
  label,
  icon,
  isActive = false,
  items,
}: CollapseMenuProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className="w-full">
      <button
        onClick={() => setOpen(!open)}
        className={`w-full px-3 py-2 text-lg flex items-center gap-5  transition  ${
           isActive
                            ? 'bg-slate-200/20 rounded-sm text-[var(--color-secondary)]  font-semibold'
                            : 'hover:opacity-90 hover:bg-slate-200/20'
        }`}
      >
        <div className="flex items-center gap-5">
         {icon} {label}
        </div>
        <svg
          className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <ul className="ml-6 mt-2 space-y-2 border-l pl-4">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block px-2 py-1 text-sm text-gray-600 hover:text-[var(--color-secondary)]"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
