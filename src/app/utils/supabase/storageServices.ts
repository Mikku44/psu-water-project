import { createClient } from "./client";




export async function uploadFile(fileName: string, file: File | Blob) {
  const supabase = createClient()

  const { data, error } = await supabase.storage
    .from('water-bucket')
    .upload(fileName, file, { upsert: true })

  if (error) {
    console.error('Upload error:', error)
    throw error
  }

  // Get public URL
  const {
    data: { publicUrl },
  } = supabase.storage.from('water-bucket').getPublicUrl(fileName)

  return publicUrl
}