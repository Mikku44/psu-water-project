import { createClient } from '../utils/supabase/client'

export async function submitContact (formData: {
  name: string
  email: string
  title: string
  detail: string
  contact_type: string
}) {
  const supabase = createClient()

  const { data, error } = await supabase.from('contacts').insert([
    {
      name: formData.name,
      email: formData.email,
      title: formData.title,
      detail: formData.detail,
      contact_type: formData.contact_type
    }
  ])
  if (error) {
    throw error
  }
}


export async function getContacts() {
  const supabase = createClient()

  const { data, error } = await supabase
    .from('contacts')
    .select('*')
    .order('created_at', { ascending: false }) // optional: latest first

  if (error) {
    throw error
  }

  return data
}
