'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Newspaper, Phone, Images } from 'lucide-react'

const protectedPaths = [
  { path: "/news/manage", label: "Manage News", icon: Newspaper },
  { path: "/contact/manage", label: "Manage Contacts", icon: Phone },
  { path: "/carousel/manage", label: "Manage Carousel", icon: Images },
]

export default function AdminPage() {
  const pathname = usePathname()

  return (
    <div className="container-x mx-auto px-6 py-10 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {protectedPaths.map(({ path, label, icon: Icon }) => (
          <Link key={path} href={path}>
            <div
              className={`flex items-center space-x-3 rounded-xl border p-6 shadow-sm transition hover:shadow-md cursor-pointer
                ${pathname === path ? "border-blue-500 bg-blue-50" : "border-gray-200 bg-white"}`}
            >
              <Icon className="w-6 h-6 text-blue-600" />
              <span className="font-medium">{label}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
