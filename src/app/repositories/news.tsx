import { createClient } from "../utils/supabase/server";



interface NewsFilter {
  query?: string
  sort?: 'latest' | 'oldest' | 'name'
}

export  async function getLatestNews() {
  const supabase = await createClient();
  const { data: news } = await supabase.from("news").select();

  return news?.[0];
}


export  async function getAllNews() {
  const supabase = await createClient();
  const { data: news } = await supabase.from("news").select();

  return news;
}
export  async function getNewsWithSlug(slug:string) {
  if(!slug) throw Error("Invalid Slug.")
  const supabase = await createClient();
  const { data: news } = await supabase.from("news").select("*").eq("slug",slug);

  return news;
}

export async function getFilterNews({ query = '', sort = 'latest' }: NewsFilter) {
  const supabase = await createClient()

  let req = supabase.from('news').select('*')

  
 if (query) {
    // Escape % and _ to avoid issues
    const safeQuery = query.replace(/%/g, '\\%').replace(/_/g, '\\_')
    req = req.or(`title.ilike.%${safeQuery}%,description.ilike.%${safeQuery}%`)
  }

  switch (sort) {
    case 'oldest':
      req = req.order('created_at', { ascending: true })
      break
    case 'name':
      req = req.order('title', { ascending: true })
      break
    case 'latest':
    default:
      req = req.order('created_at', { ascending: false })
      break
  }

  const { data, error } = await req
  if (error) {
    console.error('Error fetching news:', error.message)
    return []
  }

  return data
}





