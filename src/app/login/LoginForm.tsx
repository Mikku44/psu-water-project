"use client";


import { useActionState } from "react"; // Changed from useFormState
import { loginAction } from "./actions";

export default function LoginForm() {
  const [state, formAction, isPending] = useActionState(loginAction, { error: null });

  return (
    <form
      action={formAction}
      className="bg-white p-6 rounded-xl shadow-md w-full max-w-sm"
    >
      <h1 className="text-2xl font-bold text-center mb-6">Login</h1>

      {state?.error && (
        <div className="bg-red-100 text-red-600 p-2 mb-4 rounded text-sm">
          {state.error}
        </div>
      )}

      <input
        type="text"
        name="username"
        placeholder="Username"
        className="border px-3 py-2 w-full mb-3 rounded"
        required
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        className="border px-3 py-2 w-full mb-5 rounded"
      />

      <button
        type="submit"
        disabled={isPending}
        className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition disabled:opacity-50"
      >
        {isPending ? "Logging in..." : "Login"}
      </button>
    </form>
  );
}