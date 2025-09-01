import { createClient } from '../utils/supabase/client'
import { uploadFile } from '../utils/supabase/storageServices'

export async function uploadCarouselImage (files?: (File | Blob)[]) {
  let imageUrls: string[] | undefined = undefined

  if (files && files.length > 0) {
    imageUrls = []
    for (const file of files) {
      const fileName = `/carousel-images/${Date.now()}-${Math.random()
        .toString(36)
        .substring(2)}.jpg`
      const publicUrl = await uploadFile(fileName, file)
      imageUrls.push(publicUrl)
    }
    return imageUrls
  }
}

export async function getCarouselImages () {
  const supabase = createClient()
  const { data, error } = await supabase.storage
    .from('water-bucket')
    .list('carousel-images', {
      limit: 100, // number of files to fetch
      sortBy: { column: 'created_at', order: 'desc' }
    })

  if (error) {
    console.error('Error fetching images:', error)
    return []
  }

  // Map file objects to public URLs
  return data.map(
    file =>
      supabase.storage
        .from('water-bucket')
        .getPublicUrl(`carousel-images/${file.name}`).data.publicUrl
  )
}

export async function deleteCarouselImage(path: string) {
  const supabase = createClient()
  const { error } = await supabase.storage
    .from('water-bucket') 
    .remove([path])     

  if (error) {
    console.error('Delete failed:', error)
    return false
  }
  return true
}