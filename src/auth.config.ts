import * as bcrypt from "bcryptjs";

import prisma from "./lib/prisma";
import Credentials from "next-auth/providers/credentials";
import { loginSchema } from "@/schemas/login.schema";

import type { NextAuthConfig } from "next-auth";

export default {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {},
      async authorize(credentials) {
        const validatedFields = loginSchema.safeParse(credentials);

        if (validatedFields.success) {
          const { email, password } = validatedFields.data;

          const user = await prisma.user.findUnique({
            where: {
              email,
            },
          });

          if (!user || !password) return null;

          const passwordMatched = await bcrypt.compare(password, user.password);

          if (!passwordMatched) return null;

          return user;
        }

        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
