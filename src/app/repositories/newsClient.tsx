import { INews } from "../models/newsModel"
import { createClient } from "../utils/supabase/client"
import { uploadFile } from "../utils/supabase/storageServices"

export  async function getAllNews() {
  const supabase = await createClient();
  const { data: news } = await supabase.from("news").select();

  return news;
}

export async function insertNewsWithImage(
  news: Omit<INews, 'id' | 'created_at' | 'image_url'>,
  files: (File | Blob)[]
) {
  const supabase = await createClient()

  // Upload all files
  const imageUrls: string[] = []
  for (const file of files) {
    const fileName = `${Date.now()}-${Math.random()
      .toString(36)
      .substring(2)}.jpg`

    const publicUrl = await uploadFile(fileName, file)
    imageUrls.push(publicUrl)
  }

  // Insert record
  const { data, error } = await supabase
    .from('news')
    .insert([
      {
        slug: news.slug,
        title: news.title,
        description: news.description,
        content: news.content,
        image_url: imageUrls,
      },
    ])
    .select()
    .single()

  if (error) {
    console.error('Insert news error:', error)
    throw error
  }

  return data
}


export async function deleteNews(id: number) {
  const supabase = await createClient()

  // 1. Get the news row first (to find image urls)
  const { data: news, error: fetchError } = await supabase
    .from('news')
    .select('image_url')
    .eq('id', id)
    .single()

  if (fetchError) {
    console.error('Fetch news error:', fetchError)
    throw fetchError
  }

  // 2. Delete from database
  const { error: deleteError } = await supabase
    .from('news')
    .delete()
    .eq('id', id)

  if (deleteError) {
    console.error('Delete news error:', deleteError)
    throw deleteError
  }

  // 3. If images exist, delete from storage
  if (news?.image_url?.length > 0) {
    // Extract file paths from public URLs
    const filePaths = news.image_url.map((url: string) => {
      const parts = url.split('/news-images/')
      return parts[1] // path inside the bucket
    })

    const { error: storageError } = await supabase.storage
      .from('news-images')
      .remove(filePaths)

    if (storageError) {
      console.error('Delete storage files error:', storageError)
      // not throwing here, because DB delete already succeeded
    }
  }

  return { success: true }
}


interface UpdateNewsParams {
  id: number
  data: Partial<Omit<INews, 'id' | 'created_at'>>
  files?: (File | Blob)[]
}

export async function updateNews({ id, data, files }: UpdateNewsParams) {
  const supabase = await createClient()
  let imageUrls: string[] | undefined = undefined

  // 1. If new files are provided, upload them
  if (files && files.length > 0) {
    imageUrls = []
    for (const file of files) {
      const fileName = `/news-images/${Date.now()}-${Math.random().toString(36).substring(2)}.jpg`
      const publicUrl = await uploadFile(fileName, file)
      imageUrls.push(publicUrl)
    }
    data.image_url = imageUrls
  }

  // 2. Update the news record
  const { data: updated, error } = await supabase
    .from('news')
    .update(data)
    .eq('id', id)
    .select()
    .single()

  if (error) {
    console.error('Update news error:', error)
    throw error
  }

  return updated
}
