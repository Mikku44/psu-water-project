"use client"

import { useState, useRef, useEffect, ReactNode } from "react"
import Link from "next/link"

type DropdownMenuProps = {
  label: string
  isActive?: boolean
  icon:ReactNode;
  items: { href: string; label: string }[]
}

export default function DropdownMenu({
  label,
  isActive = false,
  icon,
  items,
}: DropdownMenuProps) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [])

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-2 px-3 py-2 transition ${
          isActive
            ? "border-b-2 border-[var(--color-secondary)] text-[var(--color-secondary)] font-semibold"
            : "text-gray-700 hover:text-[var(--color-secondary)]"
        }`}
      >
        {icon}
        {label}
        <svg
          className={`w-4 h-4 transition-transform ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <ul className="absolute left-0 mt-2 w-48 bg-white border overflow-hidden  rounded-lg shadow-lg z-50">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block px-4 py-2 text-sm text-gray-700 duration-150 hover:text-[var(--color-secondary)]"
                onClick={() => setOpen(false)}
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