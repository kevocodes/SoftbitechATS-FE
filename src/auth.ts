import * as bcrypt from "bcrypt";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

import prisma from "./lib/prisma";
import { loginSchema } from "@/schemas/login.schema";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
} = NextAuth({
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
  callbacks: {
    async session({ session, token }) {    
      if (token.sub && session.user ) {
        session.user.id = token.sub;
      }

      if (token.role && session.user) {
        session.user.role = token.role;
      }

      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token;

      const user = await prisma.user.findUnique({
        where: {
          id: token.sub,
        },
      });

      if (!user) return token;

      //Add more fields to token
      token.name = `${user.name} ${user.lastname}`;
      token.role = "temp role";

      return token;
    },
  },
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login",
  },
});
