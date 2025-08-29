"use server";

import { getUserLogin } from "@/app/repositories/users";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginAction(
  prevState: { error: string | null },
  formData: FormData
): Promise<{ error: string | null }> {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  try {
    const user = await getUserLogin(username, password);

    if (!user || user.length === 0) {
      return { error: "Invalid credentials" };
    }

    // Set cookie (httpOnly, secure in production)
    const cookieStore = await cookies();
    cookieStore.set("user_session", JSON.stringify(user[0]), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24, // 1 day
    });

  } catch (error: unknown) {
    console.error("Login error:", error);
    
    if (error instanceof Error) {
      return { error: error.message };
    }
    
    return { error: "An unexpected error occurred during login" };
  }

  // redirect should be outside try-catch as it throws internally
  redirect("/news/manage");
}