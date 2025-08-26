import { createClient } from "../utils/supabase/server";


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