'use client'
import { useEffect, useState } from 'react'
import { getContacts } from '@/app/repositories/contacts'

export default function ContactList() {
  const [contacts, setContacts] = useState<
    {
      id: string
      name: string
      email: string
      title: string
      detail: string
      contact_type: string
    }[]
  >([])

  useEffect(() => {
    async function loadContacts() {
      try {
        const data = await getContacts()
        setContacts(data)
      } catch (err) {
        console.error('Error fetching contacts:', err)
      }
    }
    loadContacts()
  }, [])

  return (
    <div className="container-x mx-auto my-6 min-h-screen">
      <div className="overflow-x-auto rounded-lg shadow">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-700">
          <thead className="bg-gray-100 text-xs uppercase text-gray-600">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Detail</th>
              <th className="px-4 py-3">Type</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact.id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-2 font-medium">{contact.name}</td>
                <td className="px-4 py-2 ">{contact.email}</td>
                <td className="px-4 py-2">{contact.title}</td>
                <td className="px-4 py-2">{contact.detail}</td>
                <td className="px-4 py-2">
                  <span className="rounded bg-gray-100 px-2 py-1 text-xs font-medium">
                    {contact.contact_type}
                  </span>
                </td>
              </tr>
            ))}
            {contacts.length === 0 && (
              <tr>
                <td colSpan={5} className="px-4 py-6 text-center text-gray-500">
                  No contacts found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
