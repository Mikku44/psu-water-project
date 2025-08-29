import { createClient } from "../utils/supabase/client";
// import bcrypt from "bcryptjs";

export async function getUserLogin(username: string, password: string) {
  if (!username || !password) throw Error("Invalid username or password");

  const supabase = await createClient();

  // 1. Get user by username
  const { data: users, error } = await supabase
    .from("user")
    .select("*")
    .eq("username", username)
    .limit(1);

  if (error) throw error;
  if (!users || users.length === 0) throw new Error("User not found");

  const user = users[0];

  // 2. Compare hashed password
//   console.log("Password : ",password,":",user.password)
  const isMatch = password == user.password; 
//   await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Invalid password");

  // 3. Return safe user object (exclude password)
  const { password: _pw, ...safeUser } = user;
  return safeUser;
}
