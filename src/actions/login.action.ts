"use server";

import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/constants/routes";
import { loginSchema } from "@/schemas/login.schema";
import { AuthError } from "next-auth";
import * as z from "zod";

export const login = async (
  data: z.infer<typeof loginSchema>,
  callbackUrl?: string | null
) => {
  const validatedFields = loginSchema.safeParse(data);

  if (!validatedFields.success) {
    return { error: "Credenciales inválidas" };
  }

  const { email, password } = validatedFields.data;

  try {
    await signIn("credentials", {
      email: email,
      password: password,
      redirectTo: callbackUrl || DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Credenciales inválidas" };
        default:
          return {
            error: "Oops, algo salió mal, intentalo nuevamente más tarde",
          };
      }
    }
    throw error;
  }
};