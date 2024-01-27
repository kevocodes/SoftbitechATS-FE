"use server"

import { signIn } from "@/auth"
import { loginSchema } from "@/schemas/login.schema"
import { AuthError } from "next-auth"
import * as z from "zod"

export const login = async (data: z.infer<typeof loginSchema>) => {
  const validatedFields = loginSchema.safeParse(data)

  if (!validatedFields.success) {
    return { error: "Invalid credentials!" }
  }

  const { email, password } = validatedFields.data

  try {
    await signIn("credentials", {
      email: email,
      password: password,
      redirectTo: "/",
    })

  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials!" }
        default:
          return { error: "Something went wrong!" }
      }
    }
    throw error
  }
}